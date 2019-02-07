import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailReservationPageRoutingModule } from './detail_reservation-page-routing.module';
import { DetailReservationPageComponent } from './detail_reservation-page.component';

@NgModule({
    imports: [CommonModule, DetailReservationPageRoutingModule],
    declarations: [DetailReservationPageComponent]
})
export class DetailReservationPageModule {}
