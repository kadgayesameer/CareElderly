import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  email = new String;
  passwordUser = new String;
  username = new String;
  constructor(private router: Router) { }

  authenticate(username, password) {
    this.email = username;
    this.passwordUser = password;
    if (username === this.email && username !== '' && password === this.passwordUser && password !== '') {
      console.log("Inside service");
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  getUserName() {
    this.username = sessionStorage.getItem('authenticaterUser')
    if (this.username != null) {
      return this.username;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
