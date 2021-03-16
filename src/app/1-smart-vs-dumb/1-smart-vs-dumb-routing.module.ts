import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartVsDumbAfterComponent } from './smart-vs-dumb-after/smart-vs-dumb-after.component';
import { SmartVsDumbBeforeComponent } from './smart-vs-dumb-before/smart-vs-dumb-before.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'before',
  },
  {
    path: 'before',
    component: SmartVsDumbBeforeComponent,
  },
  {
    path: 'after',
    component: SmartVsDumbAfterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartVsDumbRoutingModule { }
