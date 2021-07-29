import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { DecimalFractionPipe } from './decimal-fraction.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    DecimalFractionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent,
    DecimalFractionPipe
  ]
})
export class PipesModule { }
