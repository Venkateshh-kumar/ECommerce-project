import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Observable } from 'rxjs';
import { SearchComponent } from "../../partials/search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute:ActivatedRoute){
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)            //we need to make "noPropertyAccessFromIndexSignature": false, from true. because this is home page related 
        {
          this.foodService.getAllFoodsBySearchTerm(params.searchTerm).subscribe((foods) => {
            this.foods = foods;
          });
        }
      else{
        this.foodService.getAll().subscribe((foods) => {
          this.foods = foods;
        });
      }
    })
  }
}