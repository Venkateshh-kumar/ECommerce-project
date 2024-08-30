import { Component, } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

import { Router } from '@angular/router';

// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food! : Food;
Inr: string|undefined;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService,
     private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        foodService.getFoodById(params.id).subscribe((food) => {
          this.food = food;
        });
      }
    });
  }

  addToCart(){

    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
