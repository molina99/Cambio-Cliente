import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCopyPageComponent } from './book_copy-page.component';

const routes: Routes = [
    {
        path: '',
        component: BookCopyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookCopyPageRoutingModule {}
