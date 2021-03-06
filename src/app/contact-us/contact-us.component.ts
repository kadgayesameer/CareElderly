import { Component, OnInit } from '@angular/core';
import { UrlManageServiceService } from '../service/url-manage-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name = new String;
  phone = new String;
  email = new String;
  text = new String;

  constructor(public urlManageServiceService: UrlManageServiceService) { }

  ngOnInit(): void {
  }

  onSubmitContactUs() {
    // console.log("Inside onSubmitContactUs()");
    if (this.name == '' || this.name === null) {
      alert("Please Enter a Name");
    } else if (this.phone == '' || this.phone === null) {
      alert("Please Enter Phone Number");
    } else if (this.email == '' || this.email === null || this.email.length == 0) {
      alert("Please Enter Email");
    } else if (this.email.length > 0 && !(this.email.includes("@"))) {
      alert("Please Enter A Valid Email-Id With @");
    } else if (this.text == '' || this.text === null) {
      alert("Please Enter Something In Help Section");
    } else if (this.name.length > 0 && this.phone.length > 0 && this.email.length > 0 && this.email.includes("@") && this.text.length > 1) {
      alert("Request Sent Successfully");
      this.clearForm();
    } else {
      alert("Ooops!! Something Un Filled In Form");
    }
  }
  clearForm() {
    this.name = '';
    this.phone = '';
    this.email = '';
    this.text = '';
  }
}
