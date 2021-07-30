import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberstreamComponent } from './numberstream.component';
import { ProfilereactiveComponent } from './profilereactive.component';



@NgModule({
  declarations: [
    NumberstreamComponent,
    ProfilereactiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberstreamComponent,
    ProfilereactiveComponent
  ]
})
export class ReactiveModule { }
