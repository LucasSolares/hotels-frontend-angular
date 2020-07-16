import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel;
  @Output() handleMakeAReservation: EventEmitter<any> = new EventEmitter();

  ngOnInit(){}

  makeAReservation() {

    this.handleMakeAReservation.emit(this.hotel.id);

  }

}
