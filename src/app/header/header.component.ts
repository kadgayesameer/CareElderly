import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';
import { UrlManageServiceService } from '../service/url-manage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public hardcodedAuthenticationServiceService: HardcodedAuthenticationServiceService,
    private router: Router,
    public urlManageServiceService: UrlManageServiceService) { }

  ngOnInit(): void {
    // console.log(this.router.url);
  }

  toContentNgo(event) {
    document.getElementById("contentMyAbout").scrollIntoView();
  }

  toContentHealthCheck(event) {
    document.getElementById("contentMyAllPackageDeatails").scrollIntoView();
  }

  toContentHealthTraker(event) {
    document.getElementById("contentMyHealthTracker").scrollIntoView();
  }

  toContentBegars(event) {
    document.getElementById("contentMyAllPackageDeatails").scrollIntoView();
  }
}
