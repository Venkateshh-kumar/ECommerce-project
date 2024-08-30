// // src/app/services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:5000/api'; // Update with your backend URL
//   private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
//   user$: Observable<any> = this.userSubject.asObservable();

//   constructor(private http: HttpClient) {
//     // Check if the user is already logged in by looking at localStorage
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       this.userSubject.next(JSON.parse(storedUser));
//     }
//   }

//   login(email: string, password: string): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
//       tap(response => {
//         if (response.user) {
//           // Store user data and authentication token (if any)
//           this.userSubject.next(response.user);
//           localStorage.setItem('user', JSON.stringify(response.user));
//         }
//       })
//     );
//   }

//   logout(): void {
//     this.userSubject.next(null);
//     localStorage.removeItem('user');
//   }

//   // Method to check if the user is logged in
//   isLoggedIn(): boolean {
//     return this.userSubject.value !== null;
//   }

//   // Method to get the currently logged-in user's information
//   getUser(): any {
//     return this.userSubject.value;
//   }
// }
