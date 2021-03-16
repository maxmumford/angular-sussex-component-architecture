import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '1-smart-vs-dumb',
    loadChildren: () => import('./1-smart-vs-dumb/1-smart-vs-dumb.module').then(m => m.SmartVsDumbModule),
  },
  {
    path: 'black-box',
    loadChildren: () => import('./2-black-box/2-black-box.module').then(m => m.BlackBoxModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
