import { Component } from '@angular/core';
import { Hotel } from './models/hotel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // termsAndConditions = false;
  // name: string = '';
  // adultConfirm = false;

  hotels: Hotel[] = [
    new Hotel('Solei', 'Un gran hotel', 1500, '1', ['psicina']),
    new Hotel('Barcenas', 'Hotel con una gran psicina', 2000, '2', ['pequeño', 'antigua']),
    new Hotel('Hilton', 'Un hotel muy bueno', 2500, '3', ['psicina', 'grande'])
  ];

  // nameHotel = ''

  // addHotel(): void {
  //   let nameHotel = this.nameHotel.trim()
  //   if(nameHotel) {
  //     this.hotels.push(nameHotel)
  //     this.nameHotel = ''
  //   }
  // }

  // removeHotel(index: number): void {
  //   this.hotels.splice(index, 1)
  // }

}
