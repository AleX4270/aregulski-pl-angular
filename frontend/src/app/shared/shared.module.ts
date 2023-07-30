import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './components/footer/footer.component';
import { ReturnButtonComponent } from './components/return-button/return-button.component';

@NgModule({
  declarations: [
    FooterComponent,
    ReturnButtonComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    ReturnButtonComponent
  ]
})
export class SharedModule { }
