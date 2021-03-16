import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartVsDumbBeforeComponent } from './smart-vs-dumb-before/smart-vs-dumb-before.component';

const routes: Routes = [
  {
    path: '',
    component: SmartVsDumbBeforeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartVsDumbRoutingModule { }
