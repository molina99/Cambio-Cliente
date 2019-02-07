import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailReservationPageComponent } from './detail_reservation-page.component';

const routes: Routes = [
    {
        path: '',
        component: DetailReservationPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailReservationPageRoutingModule {}
