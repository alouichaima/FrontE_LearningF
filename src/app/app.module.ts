import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlayoutComponent } from './layout/user_layout/userlayout/userlayout.component';
import { AdminLayoutComponent } from './layout/admin_layout/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteformateurComponent } from './view/admin/formateur/deleteformateur/deleteformateur.component';
import { ProfilLayoutComponent } from './layout/profil-layout/profil-layout.component';
import { MessageComponent } from './view/apprenant/message/message.component';
import { profilComponent } from './view/apprenant/profil/profil.component';
import { ProfilModule } from './view/apprenant/profil/profil.module';

@NgModule({
  declarations: [
    AppComponent,
    UserlayoutComponent,
    AdminLayoutComponent,
    DeleteformateurComponent,
    ProfilLayoutComponent,
    MessageComponent,
    profilComponent,
   

   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ProfilModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
