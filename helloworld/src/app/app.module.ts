import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { GreeterModule } from "./greeter/greeter.module";
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
// import { GreeterComponent } from "./greeter/greeter.component";
// import { HaiComponent } from "./greeter/hai.component";
// import { HelloComponent } from "./greeter/hello.component";



@NgModule({
  // declarations: [AppComponent,HelloComponent,HaiComponent,GreeterComponent],  //View Objects
  declarations: [AppComponent],
  // imports: [BrowserModule,GreeterModule, HeaderModule, FooterModule, MainModule],  //All SubModules
  imports: [BrowserModule,HeaderModule, FooterModule, MainModule],  //All SubModules
  providers: [],   //Services,
  bootstrap: [AppComponent]
})
export class AppModule { }