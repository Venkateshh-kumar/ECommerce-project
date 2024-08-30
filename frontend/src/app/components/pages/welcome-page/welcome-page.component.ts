import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../partials/header/header.component";

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

}
