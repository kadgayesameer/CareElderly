import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new String;
  password = new String;
  errorMessage = 'Invalid Credentails';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationServiceService: HardcodedAuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log("Inside handle Login");
    if (this.username.length == 0) {
      alert("Username Should Not Be Empty");
      this.invalidLogin = true;
    } else if (this.username.length > 0) {
      if (!(this.username.includes("@"))) {
        alert("Please Enter A Valid Username With @");
        this.invalidLogin = true;
      }
    }
    if (this.password.length == 0) {
      alert("Password Should Not Be Empty");
      this.invalidLogin = true;
    }
    if (this.username.length > 0 && this.username.includes("@") && this.password.length > 0) {
      if (this.hardcodedAuthenticationServiceService.authenticate(this.username, this.password)) {
        this.invalidLogin = false;
        alert("Login Successfully !!")
        this.router.navigate(['welcome', this.username]);
      } else {
        this.invalidLogin = true;
      }
    }
  }
}
