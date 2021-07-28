import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropsbindingComponent } from './propsbinding.component';
import { GreeterComponent } from './greeter.component';
import { ProfilemasterComponent } from './profilemaster.component';
import { ProfiledetailsComponent } from './profiledetails.component';
import { ProfileaddressComponent } from './profileaddress.component';
import { ProfilecompanyComponent } from './profilecompany.component';



@NgModule({
  declarations: [
    PropsbindingComponent,
    GreeterComponent,
    ProfilemasterComponent,
    ProfiledetailsComponent,
    ProfileaddressComponent,
    ProfilecompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PropsbindingComponent,
    GreeterComponent,
    ProfilemasterComponent,
    ProfiledetailsComponent,
    ProfileaddressComponent,
    ProfilecompanyComponent
  ]
})
export class PropsbindingModule { }
