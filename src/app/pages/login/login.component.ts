import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { AuthService } from 'src/app/service/guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loader;
  errorMsg;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loader = true;
    if (this.loginForm.valid) {
      this.authService.signIn({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      }).subscribe((response) => {
        console.log(response)
      }, (error) => {
        this.loader = false;
        this.errorMsg = error.error.message;
      })
    } else {
      this.loader = false;
    }
  }

}
