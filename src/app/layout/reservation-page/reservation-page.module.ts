import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationPageRoutingModule } from './reservation-page-routing.module';
import { ReservationPageComponent } from './reservation-page.component';

@NgModule({
    imports: [CommonModule, ReservationPageRoutingModule],
    declarations: [ReservationPageComponent]
})
export class ReservationPageModule {}
