import cors from "cors";
import express from "express";
import { sample_foods, sample_users} from './data'; // Adjust the path if necessary

import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    // origin: ["http://localhost:4200"]
    origin:'*'
}));

app.get("/api/foods", (req, res) => {
    res.send("Hello guys");
});

app.get("/api/foods/search/:abc", (req, res) => {
    const abc = req.params.abc;
    const foods = sample_foods
        .filter(food => food.name.toLowerCase()
        .includes(abc.toLowerCase()));
    res.send(foods);
});

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    console.log(foodId);
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
});

app.post("/api/users/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user=> user.email === email && user.password === password);

    // if (user) {
    //     const token = generateTokenResponse(user);
    //     res.send({ email: user.email, isAdmin: user.isAdmin, token });
    // } else {
    //     res.status(400).send({ message: "Invalid email or password" });
    // }
    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("Invalid email or password")
    }
});

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({                   //token generating
        email: user.email,
        isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"              //token will expires in 30 days
    });
    user.token=token;
    return user;
};

const port = 5000;
app.listen(port, () => {
    console.log("Welcome to server http://localhost:" + port);
});
