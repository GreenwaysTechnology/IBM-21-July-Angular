import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterationComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    RegisterationComponent
  ]
})
export class RegisterationFormsModule { }
