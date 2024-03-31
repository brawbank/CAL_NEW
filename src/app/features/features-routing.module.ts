import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintWorkComponent } from './print-work/print-work.component';
import { DigitalPrintComponent } from './digital-print/digital-print.component';
import { ComparePricesComponent } from './compare-prices/compare-prices.component';
import { SetUpComponent } from './set-up/set-up.component';


const routes: Routes = [
  { path: '', redirectTo: 'print-work', pathMatch: 'full' },
  { path: 'print-work', component: PrintWorkComponent },
  { path: 'digital-print', component: DigitalPrintComponent },
  { path: 'compare-prices', component: ComparePricesComponent },
  { path: 'set-up', component: SetUpComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
