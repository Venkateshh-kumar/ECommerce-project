import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }

// export class HeaderComponent implements OnInit {
//   isLoggedIn: boolean = false;
//   username: string | null = null;

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     // Check login status from localStorage or a service
//     this.isLoggedIn = !!localStorage.getItem('token'); // Example check
//     this.username = this.isLoggedIn ? localStorage.getItem('username') : null;
//   }

//   logout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     this.router.navigateByUrl('/');
//   }
// }
