import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
    apiKey: "AIzaSyClR9jyqfpjZJLpdqJ8ySZsSxVuT0k0hec",
    authDomain: "skugal-55b6f.firebaseapp.com",
    databaseURL: "https://skugal-55b6f.firebaseio.com",
    projectId: "skugal-55b6f",
    storageBucket: "skugal-55b6f.appspot.com",
    messagingSenderId: "510705213380",
    appId: "1:510705213380:web:059c3133bd771e4aac8e91",
    measurementId: "G-NFZ5GYF5TJ"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
