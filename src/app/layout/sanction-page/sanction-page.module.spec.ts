import { SanctionPageModule } from './sanction-page.module';

describe('SanctionPageModule', () => {
    let sanctionPageModule: SanctionPageModule;

    beforeEach(() => {
        sanctionPageModule = new SanctionPageModule();
    });

    it('should create an instance', () => {
        expect(sanctionPageModule).toBeTruthy();
    });
});
