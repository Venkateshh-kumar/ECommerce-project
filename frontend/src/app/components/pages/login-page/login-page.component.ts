// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../../../services/user.service';

// @Component({
//   selector: 'app-login-page',
//   standalone:true,
//   imports: [ReactiveFormsModule,CommonModule],
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })
// export class LoginPageComponent implements OnInit {
//   loginForm!: FormGroup; // Correctly type loginForm as FormGroup
//   isSubmitted = false;
//   returnUrl = '';
//   constructor(private formBuilder: FormBuilder, private router: Router,
//      private userService:UserService, private activatedRoute:ActivatedRoute) {}

//   ngOnInit(): void {
//     // Initialize loginForm using FormBuilder
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],     //required is used for if ur email string will be empty then ur loginForm show invalid 
//       password: ['', Validators.required]
//     });

//     this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;

//   }

//   get fc() {
//     return this.loginForm.controls; // Access the controls of the form
//   }

//   submit() {
//     this.isSubmitted = true;
//     if (this.loginForm.invalid) return;

//     // alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`);
//     this.userService.login({email: this.fc.email.value,password: this.fc.password.value}).subscribe(()=>{
//       this.router.navigateByUrl(this.returnUrl);
//     })
//   }
// }


// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';
// // import { UserService } from '../../../services/user.service';
// @Component({
//   selector: 'app-login-page',
//   standalone:true,
//   imports: [ReactiveFormsModule,CommonModule,RouterModule],
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css']
// })
// export class LoginPageComponent implements OnInit {
//   loginForm!: FormGroup; // Correctly type loginForm as FormGroup
//   isSubmitted = false;
// returnUrl: any;
//   http: any;

//   constructor(private formBuilder: FormBuilder, private router: Router,) {}

//   ngOnInit(): void {
//     // Initialize loginForm using FormBuilder
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],     //required is used for if ur email string will be empty then ur loginForm show invalid 
//       password: ['', Validators.required]
//     });
//   }

//   get fc() {
//     return this.loginForm.controls; // Access the controls of the form
//   }

//   submit() {
//     // alert("clicked submit button")
//     this.isSubmitted = true;
//     if (this.loginForm.invalid) return;

//     alert([`email: ${this.fc.email.value}`, 
//       `password: ${this.fc.password.value}`])
//     // this.http.post('http://localhost:5000/api/users/login', this.loginForm.value).subscribe(
//     //   (res: any) => {
//     //     alert(res.message);
//     //     if (res.message === 'Login successful') {
//     //       this.router.navigateByUrl('/'); // Redirect to home page
//     //     }
//     //   },
//     //   (err: { error: { message: any; }; }) => {
//     //     alert(err.error.message); // Show error message
//     //   }
//     // );
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
returnUrl: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    const loginData = {
      email: this.fc.email.value,
      password: this.fc.password.value
    };

    this.http.post('http://localhost:5000/api/users/login', loginData).subscribe(
      (res: any) => {
        alert(res.message);
        if (res.success) {
          localStorage.setItem('token', res.data);
          this.router.navigateByUrl('/home');
        }
      },
      (err: any) => {
        alert(err.error.message);
      }
    );
  }
}
