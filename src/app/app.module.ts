import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppRoutingModule } from './app-routing.module';
import { MaterialModuleModule } from './material-module/material-module.module'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import environment from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    // Initialize Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
