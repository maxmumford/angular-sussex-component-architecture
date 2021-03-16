import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileVideoComponent } from './profile-video.component';



@NgModule({
  declarations: [ProfileVideoComponent],
  exports: [ProfileVideoComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileVideoModule { }
