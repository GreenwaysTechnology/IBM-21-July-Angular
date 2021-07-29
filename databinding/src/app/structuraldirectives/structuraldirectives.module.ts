import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfComponent } from './if.component';
import { SwitchcaseComponent } from './switchcase.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IfComponent,
    SwitchcaseComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    IfComponent,
    SwitchcaseComponent
  ]
})
export class StructuraldirectivesModule { }
