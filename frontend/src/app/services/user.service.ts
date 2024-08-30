import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users/register'; // Make sure this URL is correct

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}













// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { ToastrService } from 'ngx-toastr';
// // import { BehaviorSubject, Observable, map, tap } from 'rxjs';

// // const BASE_URL = 'http://localhost:5000';
// // export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
// // const USER_KEY = "User";

// // export class User {
// //   id!: string;
// //   email!: string;
// //   name!: string;
// //   address!: string;
// //   token!: string;
// //   isAdmin!: boolean;
// // }

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserService {
// //   private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
// //   public user$: Observable<User>;

// //   constructor(private http: HttpClient, private toastrService: ToastrService) {
// //     this.user$ = this.userSubject.asObservable();
// //   }

// //   public get currentUser(): User {
// //     return this.userSubject.value;
// //   }

// //   login(data: { email: string, password: string }): Observable<User> {
// //     return this.http.post<User>('/api/users/login', data).pipe(
// //       map(user => {
// //         localStorage.setItem('user', JSON.stringify(user));
// //         this.userSubject.next(user);
// //         return user;
// //       })
// //     );
// //   }

// //   register(userRegister: { name: string; email: string; password: string; confirmPassword: string; address: string }): Observable<User> {
// //     return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
// //       tap({
// //         next: (user) => {
// //           this.setUserToLocalStorage(user);
// //           this.userSubject.next(user);
// //           this.toastrService.success(`Welcome to the Foodmine ${user.name}`, 'Register Successful');
// //         },
// //         error: (errorResponse) => {
// //           this.toastrService.error(errorResponse.error, 'Register Failed');
// //         }
// //       })
// //     );
// //   }

// //   logout() {
// //     this.userSubject.next(new User());
// //     localStorage.removeItem(USER_KEY);
// //     window.location.reload();
// //   }

// //   private setUserToLocalStorage(user: User) {
// //     localStorage.setItem(USER_KEY, JSON.stringify(user));
// //   }

// //   private getUserFromLocalStorage(): User {
// //     const userJson = localStorage.getItem(USER_KEY);
// //     if (userJson) return JSON.parse(userJson) as User;
// //     return new User();
// //   }
// // }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   // private apiUrl = 'http://localhost:5000/api/users/register'; // Make sure this URL is correct

//   constructor(private http: HttpClient) {}

//   // register(userData: any): Observable<any> {
//   //   return this.http.post<any>(this.apiUrl, userData);
//   // }

//   private apiUrl = 'http://localhost:5000/api/users/login';
//   login(credentials: { email: string; password: string }): Observable<any> {
//     return this.http.post<any>(this.apiUrl, credentials);
//   }
// }
