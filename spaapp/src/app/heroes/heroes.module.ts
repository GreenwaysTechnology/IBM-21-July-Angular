import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroesdetailsComponent } from './heroesdetails.component'



@NgModule({
  declarations: [
    HeroesComponent,
    HeroesdetailsComponent
  ],
  imports: [
    CommonModule, AppRoutingModule,HttpClientModule
  ],
  exports: [
    HeroesComponent,
    HeroesdetailsComponent
  ]
})
export class HeroesModule { }
