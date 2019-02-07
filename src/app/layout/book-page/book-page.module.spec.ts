import { BookPageModule } from './book-page.module';

describe('BlankPageModule', () => {
    let bookPageModule: BookPageModule;

    beforeEach(() => {
        bookPageModule = new BookPageModule();
    });

    it('should create an instance', () => {
        expect(bookPageModule).toBeTruthy();
    });
});
