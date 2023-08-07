import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurendraComponent } from './surendra/surendra.component';
import { SuriComponent } from './suri/suri.component';

@NgModule({
  declarations: [
    AppComponent,
    SurendraComponent,
    SuriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
