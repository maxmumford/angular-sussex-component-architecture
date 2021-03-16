import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '1-smart-vs-dumb',
    loadChildren: () => import('./1-smart-vs-dumb/1-smart-vs-dumb.module').then(m => m.SmartVsDumbModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
