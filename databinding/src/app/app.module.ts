import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { AttributebindingModule } from './attributebinding/attributebinding.module';
import { PropsbindingModule } from './propsbinding/propsbinding.module';
import { EventsModule } from './events/events.module';
import { CustomeventsModule } from './customevents/customevents.module';
import { PipesModule } from './pipes/pipes.module';
import { OrdersModule } from './orders/orders.module';
import { StructuraldirectivesModule } from './structuraldirectives/structuraldirectives.module';
import { AttributedirectivesModule } from './attributedirectives/attributedirectives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    AttributebindingModule,
    PropsbindingModule,
    EventsModule,
    CustomeventsModule,
    PipesModule,
    OrdersModule,
    StructuraldirectivesModule,
    AttributedirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
