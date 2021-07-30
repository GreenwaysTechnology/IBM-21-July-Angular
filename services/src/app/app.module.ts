import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ReactiveModule } from './reactive/reactive.module';
import { HttpprogrammingModule } from './httpprogramming/httpprogramming.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreeterModule,
    ProfilesModule,
    ReactiveModule,
    HttpprogrammingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
