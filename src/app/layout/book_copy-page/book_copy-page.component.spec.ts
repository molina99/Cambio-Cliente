import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCopyPageComponent } from './book_copy-page.component';

describe('BookCopyPageComponent', () => {
    let component: BookCopyPageComponent;
    let fixture: ComponentFixture<BookCopyPageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BookCopyPageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BookCopyPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
