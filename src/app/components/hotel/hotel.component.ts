import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {

    @Input() hotel: Hotel;

}
