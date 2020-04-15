import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StarswarsService } from './services/starswars.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';


@NgModule({
  declarations: [
    AppComponent,
    StarwarsComponent,
    LoginComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StarswarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
