import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  haveClick: { name: string };

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
    }
  }

}
