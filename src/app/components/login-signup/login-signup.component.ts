import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppbarComponent } from '../appbar/appbar.component';
import { Output , EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login-signup',
  imports: [MatCardModule , CommonModule , MatIconModule , MatFormFieldModule , MatInputModule , MatTabsModule , ReactiveFormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  constructor(private router :  Router , private fb : FormBuilder , private http : HttpService){}
  hidepassword = true;
  selectedTabIndex = 0
  isLogin = false;
  profileName = '';
  loginForm! : FormGroup;
  signupForm! : FormGroup;
  ngOnInit(): void{
  this.loginForm = this.fb.group({
    email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required]]
  });
  this.signupForm = this.fb.group({
    fullName : ['' , [Validators.required]],
    email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required]],
    phoneNumber : ['' , [Validators.required , Validators.pattern(/^\d{10}$/)]]
  })
}
onLoginSubmit() : void{
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }
  const formValue = this.loginForm.value
  this.http.postApi('/bookstore_user/login' , formValue).subscribe({
    next : (res : any) => {
      console.log('Login success', res);
      localStorage.setItem('token', res.result.accessToken);
      this.isLogin = true;
    },
    error: (err) => {
          console.error('Login error', err);
        },
  })
}
onSignupSubmit() {
  const payload = {
    fullName: this.signupForm.value.fullName,
    email: this.signupForm.value.email,
    password: this.signupForm.value.password,
    phone: this.signupForm.value.phone,
  };

  this.http.postApi('/bookstore_user/registration', payload)
    .subscribe({
      next: (res) => {
        console.log('Signup successful', res),
        this.profileName = payload.fullName[0]
      },
      error: (err) => console.error('Signup error', err),
    });
}
  forgot(){
    this.router.navigate(['/forgotPassword'])
  }
}
