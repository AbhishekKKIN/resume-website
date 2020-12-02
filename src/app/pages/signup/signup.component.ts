import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  loader;
  errorMsg;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.loader = true;
    if (this.registerForm.valid) {
      this.dataService.registration(this.registerForm.value).subscribe((response) => {
        this.loader = false;
      }, (error) => {
        this.loader = false;
        this.errorMsg = error.error.message;
      })
    } else {
      this.loader = false;
    }
  }


}
