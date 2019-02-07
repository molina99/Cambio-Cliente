import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCopyPageRoutingModule } from './book_copy-page-routing.module';
import { BookCopyPageComponent } from './book_copy-page.component';

@NgModule({
    imports: [CommonModule, BookCopyPageRoutingModule],
    declarations: [BookCopyPageComponent]
})
export class BookCopyPageModule {}
