import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { GreeterModule } from '../greeter/greeter.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,GreeterModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
