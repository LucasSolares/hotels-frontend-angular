import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(
    private userService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }

  login() {
    this.error = null;
    if (this.loginForm.valid) {
      try {
        const { email, password } = this.loginForm.value;
        this.userService
          .login(email, password)
          .subscribe((response: { data: string }) => {
            if (response.data) {
              console.log(response)
              localStorage.setItem('token', response.data);
              this.router.navigate(['']);
            }
          });
      } catch (error) {
        this.error = 'Lo sentimos usuario o contraseña incorrectos';
      }
    }
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get emailField() {
    return this.loginForm.get('email');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }
}
