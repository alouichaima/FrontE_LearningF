import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditapprenantComponent } from './editapprenant.component';

const routes: Routes = [
  {path:'',component:EditapprenantComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditapprenantRoutingModule { }
