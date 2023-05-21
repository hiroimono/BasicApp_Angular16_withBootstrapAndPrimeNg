import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';

/** PrimeNg */
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    ErrorComponent,
    ButtonModule,
    RippleModule
  ]
})
export class SharedModule { }
