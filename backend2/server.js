const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
// app.use(cors()); // Make sure this line is present

// Alternatively, you can configure CORS with specific options
app.use(cors({
  origin: '*', // Replace with your Angular app's address
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/config')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
// home
app.get("/", (req, res)=>{
    res.status(200).json({message:"Home"})
})
// Routes
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running at http://localhost:" + PORT));
