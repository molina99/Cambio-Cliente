import { ReservationPageModule } from './reservation-page.module';

describe('ReservationPageModule', () => {
    let reservationPageModule: ReservationPageModule;

    beforeEach(() => {
        reservationPageModule = new ReservationPageModule();
    });

    it('should create an instance', () => {
        expect(reservationPageModule).toBeTruthy();
    });
});
