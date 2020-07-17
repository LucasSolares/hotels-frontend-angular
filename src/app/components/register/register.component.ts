import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error: string;
  loading = false;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.buildRegisterForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }


  async register() {
    this.loading = true;
    if (this.registerForm.valid) {
      const { email, password, name, lastName } = this.registerForm.value;
      (await this.userService.register(email, password, name, lastName)).subscribe(
        (token: { data: string }) => {
          localStorage.setItem('token', token.data);
          this.router.navigate(['']);
        }
      );
    } else {
      this.error = 'Ther register form is not valid';
    }
  }

  buildRegisterForm() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }

  get emailField() {
    return this.registerForm.get('email');
  }

  get passwordField() {
    return this.registerForm.get('password');
  }

  get nameField() {
    return this.registerForm.get('name');
  }

  get lastnameField() {
    return this.registerForm.get('lastName');
  }

}
