import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  haveClick: { name: string };

  constructor() {}

  ngOnInit(): void {
    this.haveClick = JSON.parse(localStorage.getItem('haveClick'));
  }

  handleClick() {
    localStorage.setItem('haveClick', JSON.stringify({ name: 'Hola' }));
    this.haveClick = JSON.parse(localStorage.getItem('haveClick'));
  }

}
