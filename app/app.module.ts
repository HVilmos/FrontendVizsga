import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { NavComponent } from './part/nav/nav.component';
import { Enviroments } from './enviroments';
import { RendelesComponent } from './part/rendeles/rendeles.component';
import { NovenyekComponent } from './part/novenyek/novenyek.component';
import { SearchTermPipe } from './pipe/search-term.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    NavComponent,
    RendelesComponent,
    NovenyekComponent,
    SearchTermPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
