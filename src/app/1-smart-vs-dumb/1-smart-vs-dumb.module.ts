import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartVsDumbRoutingModule } from './1-smart-vs-dumb-routing.module';
import { SmartVsDumbBeforeComponent } from './smart-vs-dumb-before/smart-vs-dumb-before.component';
import { SmartVsDumbAfterComponent } from './smart-vs-dumb-after/smart-vs-dumb-after.component';
import { ProfileVideoModule } from './ui/profile/profile-video/profile-video.module';
import { ProfileHeaderModule } from './ui/profile/profile-header/profile-header.module';
import { ProfileImageGridModule } from './ui/profile/profile-image-grid/profile-image-grid.module';
import { ProfileTextBlockModule } from './ui/profile/profile-text-block/profile-text-block.module';

@NgModule({
  declarations: [
    SmartVsDumbBeforeComponent,
    SmartVsDumbAfterComponent,
  ],
  imports: [
    CommonModule,
    SmartVsDumbRoutingModule,
    ProfileVideoModule,
    ProfileHeaderModule,
    ProfileImageGridModule,
    ProfileTextBlockModule,
  ]
})
export class SmartVsDumbModule { }
