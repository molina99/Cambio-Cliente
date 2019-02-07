import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReservationPageComponent } from './detail_reservation-page.component';

describe('DetailReservationPageComponent', () => {
    let component: DetailReservationPageComponent;
    let fixture: ComponentFixture<DetailReservationPageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [DetailReservationPageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailReservationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
