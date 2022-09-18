import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-calculate-kcal',
  templateUrl: './calculate-kcal.component.html',
  styleUrls: ['./calculate-kcal.component.css']
})
export class CalculateKcalComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  genders: any = ['Male', 'Female', 'Other']
  frequencies: any = ['Rare', 'Often', 'Usually']
  targets: any = ['Loose', 'Keep', 'Gain']

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    initialHeight: new FormControl('', Validators.required),
    initialWeight: new FormControl('', Validators.required),
    gender: new FormControl('Other', Validators.required),
    frequency: new FormControl('', Validators.required),
    target: new FormControl('', Validators.required)

  });
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  get f(){
    return this.form.controls;
  }
  
  submit(): void {
    const { username, age, initialHeight, initialWeight, gender, frequency,target } = this.form.value;

    this.userService.inputData(username, age, initialHeight, initialWeight, gender, frequency,target).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  
}
