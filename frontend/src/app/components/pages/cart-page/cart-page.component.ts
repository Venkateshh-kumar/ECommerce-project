import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { Router, RouterLink } from '@angular/router'; // Ensure this import is correct
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterLink], // Include necessary modules
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;

  // Inject Router service in the constructor
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  // Method to remove item from cart
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  // Method to change the quantity of an item
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  // Method to navigate to the home page
  goto() {
    this.router.navigate(['/']); // Navigate to the home page
  }

  increaseQuantity(cartItem: any) {
    cartItem.quantity++;
    this.changeQuantity(cartItem, cartItem.quantity);
  }
  
  decreaseQuantity(cartItem: any) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.changeQuantity(cartItem, cartItem.quantity);
    }
  }
  
  
  
}
