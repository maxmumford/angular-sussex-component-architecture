import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageGridComponent } from './profile-image-grid/profile-image-grid.component';
import { ProfileImageGridItemComponent } from './profile-image-grid-item/profile-image-grid-item.component';

@NgModule({
  declarations: [ProfileImageGridComponent, ProfileImageGridItemComponent],
  exports: [ProfileImageGridComponent, ProfileImageGridItemComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileImageGridModule { }
