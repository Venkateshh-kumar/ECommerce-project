import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from '../../data';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // Return an observable of Food[]
  getAll(): Observable<Food[]> {
    return of(sample_foods);
  }

  // Return an observable of Food[] filtered by search term
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    const filteredFoods = sample_foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filteredFoods);
  }

  getFoodById(foodId: string): Observable<Food> {
    return this.getAll().pipe(
      map((foods: Food[]) => foods.find((food: Food) => food.id === foodId) ?? new Food())
    );
  }
  
}
