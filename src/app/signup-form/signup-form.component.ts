
import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,FormBuilder,NgForm,Validators,AbstractControl} from '@angular/forms'
import { isNumber } from 'util';
@Component({
  selector: './signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  
  
  title = 'signupform';
  signupForm:FormGroup
  FirstName:string=""
  LastName:string=""
  Username:string=""
  Password:string=""
  DOB:string=""
  Country:string=""
  isfav:boolean = true
  
  constructor(private frmbuilder:FormBuilder){
    this.signupForm = frmbuilder.group(
      {
        fname:['',[Validators.required,Validators.maxLength(30),Validators.minLength(3),Validators.pattern(/^[a-zA-Z\s]*$/)]],
        lname:['',[Validators.required,Validators.maxLength(30),Validators.minLength(3),Validators.pattern(/^[a-zA-Z\s]*$/)]],
        uname:['',[Validators.required,Validators.maxLength(15),Validators.minLength(3),Validators.pattern(/^[a-z0-9]+$/i)]],
        pass:['',[Validators.required,Validators.minLength(6)]],
        dob:['',[Validators.required]],
        country: ['',[Validators.required,Validators.maxLength(30)]]
      }
    )
  }

  
  OnInit(){
    this.signupForm
    
    FirstName:""
    LastName:""
    Username:""
    Password:""
    DOB:""
    Country:""
  }
  p(){
    
  }

  ngOnInit(): void {
  
  }
  
  PostData()
  { this.FirstName = this.signupForm.get('fname').value
    this.LastName = this.signupForm.get('lname').value
    this.Username = this.signupForm.get('uname').value
    this.Password = this.signupForm.get('pass').value
    this.DOB = this.signupForm.get('dob').value
    this.Country = this.signupForm.get('country').value

  
    console.log("First Name: ",this.FirstName)
    console.log("Last Name: ",this.LastName)
    console.log("User Name: ",this.Username)
    console.log("Password: ","**********")
    console.log("Date Of Birth: ",this.DOB)
    console.log("Country: ",this.Country)
    
    this.signupForm.reset()
    
    alert('Form submitted successfully')

  }
 
}
