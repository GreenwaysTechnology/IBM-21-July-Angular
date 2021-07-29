import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';



@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfilesComponent
  ]
})
export class ProfilesModule { }
