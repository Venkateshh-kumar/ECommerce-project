import { AppComponent } from './app.component';

import { HomeComponent } from './components/pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

import { SearchComponent } from './components/partials/search/search.component';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AppRoutingModule } from './app.routes';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        
    ],
    imports:[
        BrowserModule,
        AppComponent,
        HeaderComponent,
        HomeComponent,
        // RatingModule
        FoodPageComponent,
        SearchComponent,
        RouterModule,
        CartPageComponent,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut:4000,
            positionClass: 'toast-bottom-right',
            newestOnTop: false
        }),
        BrowserAnimationsModule,
        RegisterPageComponent,
    ],

    providers: [],
})
export class AppModule { }