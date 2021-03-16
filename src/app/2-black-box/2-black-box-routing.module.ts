import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackBoxComponent } from './black-box/black-box.component';

const routes: Routes = [
  {
    path: '',
    component: BlackBoxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackBoxRoutingModule { }
