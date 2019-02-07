import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanctionPageComponent } from './sanction-page.component';

const routes: Routes = [
    {
        path: '',
        component: SanctionPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SanctionPageRoutingModule {}
