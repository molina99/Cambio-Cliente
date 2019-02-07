import { DetailReservationPageModule } from './detail_reservation-page.module';

describe('DetailReservationPageModule', () => {
    let detailReservationPageModule: DetailReservationPageModule;

    beforeEach(() => {
        detailReservationPageModule = new DetailReservationPageModule();
    });

    it('should create an instance', () => {
        expect(detailReservationPageModule).toBeTruthy();
    });
});
