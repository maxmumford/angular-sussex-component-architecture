import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartVsDumbRoutingModule } from './1-smart-vs-dumb-routing.module';
import { SmartVsDumbBeforeComponent } from './smart-vs-dumb-before/smart-vs-dumb-before.component';
import { SmartVsDumbAfterComponent } from './smart-vs-dumb-after/smart-vs-dumb-after.component';

@NgModule({
  declarations: [
    SmartVsDumbBeforeComponent,
    SmartVsDumbAfterComponent,
  ],
  imports: [
    CommonModule,
    SmartVsDumbRoutingModule
  ]
})
export class SmartVsDumbModule { }
