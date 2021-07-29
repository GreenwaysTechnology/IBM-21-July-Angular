import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter.component';
import { HelloComponent } from './hello.component';
import { HaiComponent } from './hai.component';
//import { HelloService } from './hello.service';

@NgModule({
  declarations: [
    GreeterComponent,
    HelloComponent,
    HaiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterComponent,
    HelloComponent,
    HaiComponent
  ],
//  providers: [HelloService]
})
export class GreeterModule { }
