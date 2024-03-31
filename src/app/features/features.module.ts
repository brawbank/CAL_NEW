import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PrintWorkComponent } from './print-work/print-work.component';
import { DigitalPrintComponent } from './digital-print/digital-print.component';
import { ComparePricesComponent } from './compare-prices/compare-prices.component';
import { SetUpComponent } from './set-up/set-up.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [
    PrintWorkComponent,
    DigitalPrintComponent,
    ComparePricesComponent,
    SetUpComponent
  ],
  imports: [
    SharedModule,
    FeaturesRoutingModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class FeaturesModule { }
