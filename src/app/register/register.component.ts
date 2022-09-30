import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form: any = {
    username: null,
    email: null,
    password: null
  };

  form2: any = {
    code: null
  };

  isCodeSent = false;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  isCodeSuccessful = false;
  isCodeFailed = false;
  errorMessageCode = '';
  username = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isCodeSent = false;
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.username = username;
    this.authService.register(username, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.isCodeSent = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  togglePasswordVisibility(): void {
    let x = (<HTMLInputElement>document.getElementById("password"));
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  onCodeSubmit(): void {
    const { code } = this.form2;
    this.authService.verify_mobile(this.username, code).subscribe(
      data => {
        console.log(data);
        this.isCodeSuccessful = true;
        this.isCodeFailed = false;
      },
      err => {
        this.errorMessageCode = err.error.message;
        this.isCodeFailed = true;
      }
    );
  }

}
