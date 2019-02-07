import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanctionPageRoutingModule } from './sanction-page-routing.module';
import { SanctionPageComponent } from './sanction-page.component';

@NgModule({
    imports: [CommonModule, SanctionPageRoutingModule],
    declarations: [SanctionPageComponent]
})
export class SanctionPageModule {}
