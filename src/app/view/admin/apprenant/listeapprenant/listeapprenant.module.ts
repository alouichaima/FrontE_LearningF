import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeapprenantRoutingModule } from './listeapprenant-routing.module';
import { ListeapprenantComponent } from './listeapprenant.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListeapprenantComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    ListeapprenantRoutingModule,




  ]
})
export class ListeapprenantModule { }
