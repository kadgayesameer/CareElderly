import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-tracker',
  templateUrl: './health-tracker.component.html',
  styleUrls: ['./health-tracker.component.css']
})
export class HealthTrackerComponent implements OnInit {

  // confirmation = ['Yes', 'No'];
  fullname = new String;
  age = new String;
  bloodGroup = new String;
  bp = new String;
  sugar = new String;
  heart = new String;
  disease = new String;
  fever = new String;
  travel = new String;
  brief = new String;
  result = new String;

  highRishkFactor: number = 0;
  mediumRishkFactor: number = 0;
  LowRishkFactor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  register(regForm: any) {

    if (this.fullname === '' || this.fullname === null || this.fullname.length == 0) {
      alert("Please Enter Fullname");
    }
    if (this.age === '' || this.age === null || this.age.length == 0) {
      alert("Please Enter Age");
    }
    if (this.bloodGroup === '' || this.bloodGroup === null || this.bloodGroup.length == 0) {
      alert("Please Enter Blood Group");
    }
    if (this.bp === '' || this.bp === null || this.bp.length == 0) {
      alert("Please Enter BP Section");
    }

    if (this.heart === '' || this.heart === null || this.heart.length == 0) {
      alert("Please Enter Heart Problems");
    }
    if (this.disease === '' || this.disease === null || this.disease.length == 0) {
      alert("Please Enter Disease You Have");
    }
    if (this.fever === '' || this.fever === null || this.fever.length == 0) {
      alert("Please Enter Fever Section");
    }
    if (this.travel === '' || this.travel === null || this.travel.length == 0) {
      alert("Please Enter Travel History");
    }
    if (this.brief === '' || this.brief === null || this.brief.length == 0) {
      alert("Please Enter Breif Health Problems You Have");
    }


    if (this.fullname.length > 0 && this.age.length > 0 && this.bloodGroup.length > 0 && this.bp.length > 0 && this.heart.length > 0 && this.disease.length > 0 && this.fever.length > 0 && this.brief.length > 0 && this.disease.length > 0) {
      if (this.bp === 'Yes' && this.sugar === 'No') {
        this.mediumRishkFactor += 10;
        this.LowRishkFactor += 2;
      } else if (this.bp === 'No' && this.sugar === 'Yes') {
        this.mediumRishkFactor += 10;
        this.LowRishkFactor += 2;
      } else if (this.bp === 'Yes' && this.sugar === 'Yes') {
        this.highRishkFactor += 10;
        this.mediumRishkFactor += 5;
        this.LowRishkFactor += 5;
      } else if (this.bp === 'No' && this.sugar === 'No') {
        this.LowRishkFactor += 0;
      }
      // console.log('First Print ====>  ', ' 1)Low Risk Factor= ', this.LowRishkFactor, ' 2) Medium Risk Factor =  ', this.mediumRishkFactor, ' 3) High Risk Factor = ', this.highRishkFactor);
      if (this.heart === 'Yes' && this.disease === 'No') {
        this.mediumRishkFactor += 10;
        this.LowRishkFactor += 2;
      } else if (this.heart === 'No' && this.disease === 'Yes') {
        this.mediumRishkFactor += 10;
        this.LowRishkFactor += 2;
      } else if (this.heart === 'Yes' && this.disease === 'Yes') {
        this.highRishkFactor += 10;
        this.mediumRishkFactor += 5;
        this.LowRishkFactor += 5;
      } else if (this.heart === 'No' && this.disease === 'No') {
        this.LowRishkFactor += 0;
      }
      // console.log('Secound Print ====>  ', ' 1)Low Risk Factor= ', this.LowRishkFactor, ' 2) Medium Risk Factor =  ', this.mediumRishkFactor, ' 3) High Risk Factor = ', this.highRishkFactor);
      if (this.fever === 'Yes' && this.travel === 'No') {
        this.mediumRishkFactor += 10;
        this.LowRishkFactor += 2;
      } else if (this.fever === 'No' && this.travel === 'Yes') {
        this.mediumRishkFactor += 10;
        this.LowRishkFactor += 2;
      } else if (this.fever === 'Yes' && this.travel === 'Yes') {
        this.highRishkFactor += 10;
        this.mediumRishkFactor += 5;
        this.LowRishkFactor += 5;
      } else if (this.fever === 'No' && this.travel === 'No') {
        this.LowRishkFactor += 0;
      }
      // console.log('Third Print ====>  ', ' 1)Low Risk Factor= ', this.LowRishkFactor, ' 2) Medium Risk Factor =  ', this.mediumRishkFactor, ' 3) High Risk Factor = ', this.highRishkFactor);
      if (this.LowRishkFactor <= 5 && this.LowRishkFactor >= 0) {
        alert("You Dam Fine Travel With Taking The Precautions");
        this.result = ': You Dam Fine Travel With Taking The Precautions';
      } else if (this.mediumRishkFactor >= 0 && this.mediumRishkFactor <= 14 || this.highRishkFactor <= 10 && this.highRishkFactor >= 0) {
        alert("You Are Feet For Travel But You Need To Take More Precautions.");
        this.result = ': You Are Feet For Travel But You Need To Take More Precautions.';
      } else if (this.mediumRishkFactor <= 30 && this.mediumRishkFactor >= 15 || this.highRishkFactor >= 11 && this.highRishkFactor <= 30) {
        alert("You Are Not Feet For Travel But Avoid If Not Having Emergency Work.");
        this.result = ': You Are Not Feet For Travel, Avoid If Not Having Emergency Work.';
      }

      this.LowRishkFactor = 0;
      this.mediumRishkFactor = 0;
      this.highRishkFactor = 0;
    }
    // this.fullname = '';
    // this.age = '';
    // this.bloodGroup = '';
    // this.bp = '';
    // this.sugar = '';
    // this.heart = '';
    // this.disease = '';
    // this.fever = '';
    // this.travel = '';
    // this.brief = '';
  }
}
