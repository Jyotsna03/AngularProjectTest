import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: any = '';
  signup: any;


  constructor(private router: Router) { }


  onSignUp() {
    // Navigate to the form page after sign-up
    this.router.navigate(['/form']);
  }

}