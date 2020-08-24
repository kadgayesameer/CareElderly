import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlManageServiceService {

  constructor(private router: Router) { }


  checkUrlAndHide() {
    // console.log(this.router.url);
    let url;
    // if (this.router.url === '/ngoInfo' || this.router.url === '/begarHelp' || this.router.url === '/contactUs' || this.router.url === '/signUp') {
    if (this.router.url === '/healthTracker' || this.router.url === '/ngoInfo' || this.router.url === '/begarHelp' || this.router.url === '/contactUs' || this.router.url === '/signUp') {
      url = this.router.url;
      return !(url === null);
    } else {
      return false;
    }
  }

  hideHealthCheckUrl() {
    console.log(this.router.url);
    let url;
    if (this.router.url === '/healthTracker') {
      url = this.router.url;
      return !(url === null);
    } else {
      return false;
    }
  }
  hideHomeButtonOnUrl() {
    console.log(this.router.url);
    let url;
    if (this.router.url === '/home') {
      url = this.router.url;
      return !(url === null);
    } else {
      return false;
    }
  }
}
