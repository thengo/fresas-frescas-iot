import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAV6yJxkRZhdkmDcrg4DuW6PGdrxts_1As",
    authDomain: "fresas-frescas-iot.firebaseapp.com",
    databaseURL: "https://fresas-frescas-iot.firebaseio.com",
    storageBucket: "fresas-frescas-iot.appspot.com",
    messagingSenderId: "758261002536"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }