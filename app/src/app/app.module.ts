import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StarswarsService } from './services/starswars.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarwarsComponent } from './components/starwars/starwars.component';


@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StarswarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
