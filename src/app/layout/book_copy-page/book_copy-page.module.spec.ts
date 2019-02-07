import { BookCopyPageModule } from './book_copy-page.module';

describe('BookCopyPageModule', () => {
    let bookCopyPageModule: BookCopyPageModule;

    beforeEach(() => {
        bookCopyPageModule = new BookCopyPageModule();
    });

    it('should create an instance', () => {
        expect(bookCopyPageModule).toBeTruthy();
    });
});
