import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';

@NgModule({
  declarations: [
    FooterComponent,
    ReturnButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ReturnButtonComponent
  ]
})
export class SharedModule { }
