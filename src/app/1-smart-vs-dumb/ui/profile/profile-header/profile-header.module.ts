import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './profile-header.component';



@NgModule({
  declarations: [ProfileHeaderComponent],
  exports: [ProfileHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileHeaderModule { }
