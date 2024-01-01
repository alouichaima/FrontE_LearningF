import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditapprenantRoutingModule } from './editapprenant-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { EditapprenantComponent } from './editapprenant.component';


@NgModule({
  declarations: [
    EditapprenantComponent
  ],
  imports: [

    FormsModule,
    CommonModule,
    //  HttpClientModule,
    MatFormFieldModule,
     MatInputModule,
     MatCardModule,
    MatSelectModule,
     MatButtonModule,
    EditapprenantRoutingModule,
    FormsModule
  ]
})
export class EditapprenantModule { }
