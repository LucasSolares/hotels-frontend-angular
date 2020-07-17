import { Component, Input, Output, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
    }
  }

  hotels: Hotel[] = [
    new Hotel('Solei', 'Un gran hotel', 1500, '1', undefined, ['psicina']),
    new Hotel('Barcenas', 'Hotel con una gran psicina', 2000, '2', undefined, [
      'pequeño',
      'antigua',
    ]),
    new Hotel('Hilton', 'Un hotel muy bueno', 2500, '3', undefined, [
      'psicina',
      'grande',
    ]),
  ];

  handleReservation(id) {
    this.hotels.filter((hotel, index) => {
      hotel.id === id && this.hotels.splice(index, 1);
    });
  }
}
