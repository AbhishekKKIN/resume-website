import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  UserToken;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
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
    localStorage.setItem('currentSession', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRkOTMzNTM1OWQyMTAwMTdlOGUwMDAiLCJlbWFpbCI6ImFiaGlzaGVrQGdtYWlsLmNvbSIsInJvbGUiOiJndXNlciIsImlhdCI6MTYwODM1ODcwNywiZXhwIjoxNjA5MjIyNzA3LCJpc3MiOiJsb2NhbGhvc3QifQ.mElVK8M4zVK14hYeiNjKW3Gd--Y-xHdDfPQjOUQJjgU');
    if (this.loginForm.valid) {
      this.authService.signIn({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      }).subscribe((response: any) => {
        const data = response.token;
        localStorage.setItem('currentSession', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmRkOTMzNTM1OWQyMTAwMTdlOGUwMDAiLCJlbWFpbCI6ImFiaGlzaGVrQGdtYWlsLmNvbSIsInJvbGUiOiJndXNlciIsImlhdCI6MTYwODM1ODcwNywiZXhwIjoxNjA5MjIyNzA3LCJpc3MiOiJsb2NhbGhvc3QifQ.mElVK8M4zVK14hYeiNjKW3Gd--Y-xHdDfPQjOUQJjgU');
        this.router.navigate(['home']);
      }, (error) => {
        this.loader = false;
        this.errorMsg = error.error.message;
      })
    } else {
      this.loader = false;
    }
  }

}
