import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  isSubmitted = false;
  successMessage = '';
  returnUrl: '' | undefined;

  constructor(private fb: FormBuilder, ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  get fc() {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    // console.log("hello world")

    fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.registerForm.value)
    })
      .then((res) => res.json())
      .then((message) => {
        this.successMessage = 'You have successfully registered!';
        console.log("message", message);
      })
      .catch((error) => console.error("Error:", error.message));
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.mustMatch) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { UserService } from '../../../services/user.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-register-page',
//   standalone:true,
//   imports:[CommonModule,ReactiveFormsModule],
//   templateUrl: './register-page.component.html',
//   styleUrls: ['./register-page.component.css']
// })
// export class RegisterPageComponent implements OnInit {
//   registerForm: FormGroup;
//   isSubmitted = false;

//   constructor(private fb: FormBuilder, private userService: UserService) {}

//   ngOnInit(): void {
//     this.registerForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8)]],
//       confirmPassword: ['', Validators.required]
//     });
//   }

//   get fc() {
//     return this.registerForm.controls;
//   }

//   submit() {
//     this.isSubmitted = true;
//     if (this.registerForm.invalid) {
//       return;
//     }

//     this.userService.register(this.registerForm.value).subscribe(
//       (response: any) => {
//         console.log('Registration successful:', response);
//         // Handle successful registration (e.g., navigate to login)
//       },
//       (error: any) => {
//         console.error('Registration error:', error);
//         // Handle error
//       }
//     );
//   }
// }

