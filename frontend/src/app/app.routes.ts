import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { WelcomePageComponent } from './components/pages/welcome-page/welcome-page.component'; // Import the welcome page component
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent }, // Set WelcomePageComponent as the default route
    { path: 'home', component: HomeComponent },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodPageComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    {path: 'about', component:AboutUsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
