import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { HttpClientModule } from '@angular/common/http';
import { FactComponent } from './fact/fact.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    FactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    Routing,
    MatButtonModule
  ],
  providers: [BreedsComponent,FactComponent, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
