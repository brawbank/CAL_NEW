import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
  ],
  providers: [
  ]
})
export class CoreModule { }
