import { Food } from "./Food";

export class CartItem {
    quantity: number = 1;
    price: number;  // need to initialize price after food is assigned

    constructor(public food: Food) {
        this.price = this.food.price * this.quantity; 
    }
}