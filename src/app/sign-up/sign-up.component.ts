import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  firstname = new String;
  lastname = new String;
  password = new String;
  cpassword = new String;
  email = new String;
  phoneNum = new String;
  answer = new String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    //console.log("inside submit");
    if (this.firstname == '' || this.firstname === null) {
      alert("Please Enter First Name");
    } else if (this.lastname == '' || this.lastname === null) {
      alert("Please Enter Last Name");
    } else if (this.email == '' || this.email === null || this.email.length == 0) {
      alert("Please Enter Email");
    } else if (this.email.length > 0) {
      if (!(this.email.includes("@"))) {
        alert("Please Enter A Valid Email-Id With @");
      }
    } else if (this.phoneNum == '' || this.phoneNum === null) {
      alert("Please Enter Phone Number");
    } else if (this.password == '' || this.password === null) {
      alert("Please Enter Password");
    } else if (this.cpassword == '' || this.cpassword === null) {
      alert("Please Enter Confirm Password");
    }
    else if (this.password !== this.cpassword && this.cpassword.length != 0 && this.password.length != 0) {
      alert("Confirm Password Not Matched With Password");
    } else if (this.answer == '' || this.answer === null) {
      alert("Please Enter Answer");
    }



    if (this.firstname != '' && this.firstname != null && this.firstname.length != 0) {
      //alert("First Name True===>>" + this.firstname);
      if (this.lastname != '' && this.lastname != null && this.lastname.length != 0) {
        // alert("last Name True===>>" + this.lastname);
        if (this.email != '' && this.email != null && this.email.length != 0) {
          // alert("Email True===>>" + this.email);
          if (this.phoneNum != '' && this.phoneNum != null && this.phoneNum.length != 0) {
            // alert("Phone No. True===>>" + this.phoneNum);
            if (this.password != '' && this.password != null && this.password.length != 0) {
              //  alert("Password True===>>" + this.password);
              if (this.cpassword != '' && this.cpassword != null && this.cpassword.length != 0) {
                // alert("cPassword True===>>" + this.cpassword);
                if (this.answer != '' && this.answer != null && this.answer.length != 0) {
                  // alert("Answer True===>>" + this.answer);
                  if (this.email.length > 0) {
                    if (this.email.includes("@")) {
                      //alert("Please Enter A Valid Email-Id With @");
                      if (this.password === this.cpassword) {
                        alert("Request Form Submitted Successfully You Are Redirect To Login !!");
                        this.onClearAnotherForm();
                        this.router.navigate(['/login']);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  onClearAnotherForm() {
    // console.log("inside Clear function");
    this.firstname = '';
    this.lastname = '';
    this.password = '';
    this.cpassword = '';
    this.email = '';
    this.phoneNum = '';
    this.answer = '';
  }
}
