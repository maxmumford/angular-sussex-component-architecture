import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlackBoxRoutingModule } from './2-black-box-routing.module';
import { AccordionModule } from './accordion/accordion.module';
import { BlackBoxComponent } from './black-box/black-box.component';

@NgModule({
  declarations: [BlackBoxComponent],
  imports: [
    CommonModule,
    BlackBoxRoutingModule,
    AccordionModule,
  ]
})
export class BlackBoxModule { }
