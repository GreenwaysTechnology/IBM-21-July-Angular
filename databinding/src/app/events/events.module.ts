import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventbindingComponent } from './eventbinding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventbindingComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    EventbindingComponent
  ]
})
export class EventsModule { }
