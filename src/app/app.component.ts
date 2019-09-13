import { Component } from '@angular/core';
import { countryCode } from './country-code';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country;
  code: string;
  mN;
  mobileNumber;
  constructor() { }
  ngOnInit() {
    this.country = countryCode;
  }

  onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    // console.log(newVal);
    this.code = (this.country.find((data) => data.country === newVal)).code;
    // console.log(this.code);
  }
  consoleNumber(){
    this.mN = this.code +"-"+ this.mobileNumber;
    alert('Mobile Number : '+this.mN);
  }
}
