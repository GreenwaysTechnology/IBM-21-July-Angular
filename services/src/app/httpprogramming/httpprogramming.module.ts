import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero.component'


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HttpprogrammingModule { }
