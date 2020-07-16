import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private router: Router;
  email: string;
  password: string;
  name: string;
  lastname: string;

  constructor(
    private userService: UsersService,
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['home']);
    }
  }

  async register() {
    (await this.userService.register(this.email, this.password, this.name, this.lastname)).subscribe(
      (token: { data: string }) => {
        localStorage.setItem('token', token.data);
        this.router.navigate(['home']);
      }
    );
  }

}
