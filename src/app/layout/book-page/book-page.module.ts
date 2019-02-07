import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookPageRoutingModule } from './book-page-routing.module';
import { BookPageComponent } from './book-page.component';

@NgModule({
    imports: [CommonModule, BookPageRoutingModule],
    declarations: [BookPageComponent]
})
export class BookPageModule {}
