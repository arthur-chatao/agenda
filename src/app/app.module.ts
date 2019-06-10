import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire"
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { ContatoSalvarComponent } from './contato/contato-salvar/contato-salvar.component';
import { ContatoListarComponent } from './contato/contato-listar/contato-listar.component';

@NgModule({
  declarations: [AppComponent, ContatoSalvarComponent, ContatoListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyALyGxeSYCJfdLjULGpohKM6duQC1uPpaU",
    authDomain: "agenda-70105.firebaseapp.com",
    databaseURL: "https://agenda-70105.firebaseio.com",
    projectId: "agenda-70105",
    storageBucket: "",
    messagingSenderId: "979778658905",
    appId: "1:979778658905:web:0db875c58c84d570"
  }), AngularFireDatabaseModule, ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
