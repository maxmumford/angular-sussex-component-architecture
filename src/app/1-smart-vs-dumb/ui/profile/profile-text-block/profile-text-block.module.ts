import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTextBlockComponent } from './profile-text-block.component';



@NgModule({
  declarations: [ProfileTextBlockComponent],
  exports: [ProfileTextBlockComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileTextBlockModule { }
