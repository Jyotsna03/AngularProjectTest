import { Component } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  passwordFieldType: string = 'password'; 
  passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private router: Router) { }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // On form submission
  onSignUp() {
    if (this.passwordPattern.test(this.password)) {
      console.log('User signed up successfully:', this.username);
      // Navigate to the form page after sign-up
      this.router.navigate(['/form']);
    } else {
      alert('Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.');
    }
  }
}
