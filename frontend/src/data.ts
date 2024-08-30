// data.ts

import { Food } from './app/shared/models/Food'; // Adjust the import path if necessary

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10:00 - 22:00',
    price: 799,
    favorite: false,
    origins: ['Mumbai'],
    imageUrl: 'assets/food-1.jpg',
  },
  {
    id: '2',
    name: 'Meatball',
    price: 499,
    cookTime: '10:00 - 22:00',
    favorite: true,
    origins: ['Vagator Beach Road', 'South Delhi', 'India'],
    imageUrl: 'assets/food-2.jpg',
  },
  {
    id: '3',
    name: 'Vadapaw',
    price: 199,
    cookTime: '10:00 - 22:00',
    favorite: false,
    origins: ['Vadapaw Center', 'Mumbai'],
    imageUrl: 'assets/food-3.jpg',
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    price: 299,
    cookTime: '10:00 - 22:00',
    favorite: true,
    origins: ['Belgium', 'France'],
    imageUrl: 'assets/food-4.jpg',
  },
  {
    id: '5',
    name: 'Chicken Soup',
    price: 149,
    cookTime: '10:00 - 22:00',
    favorite: false,
    origins: ['India', 'Asia'],
    imageUrl: 'assets/food-5.jpg',
  },
  {
    id: '6',
    name: 'Vegetables Pizza',
    price: 239,
    cookTime: '10:00 - 22:00',
    favorite: false,
    origins: ['Patna'],
    imageUrl: 'assets/food-6.jpg',
  },
  {
    id: '7',
    name: 'Momos',
    price: 99,
    favorite: false,
    imageUrl: 'assets/food-7.jpg',
    origins: ['Koromangla', 'Bangalore'],
    cookTime: '18:00 - 23:00',
  },
  {
    id: '8',
    name: 'Samosa',
    price: 20,
    favorite: true,
    imageUrl: 'assets/food-8.jpg',
    origins: ['Bihar', 'Patna'],
    cookTime: '7:00 - 22:00',
  }
];

export const sample_users: any[] = [
  {
    name: "a",
    email: "abc@gmail.com",
    password: "12345",
    isAdmin: true
  },
  {
    name: "b",
    email: "zzz@gmail.com",
    password: "12345",
    isAdmin: true
  }
];
