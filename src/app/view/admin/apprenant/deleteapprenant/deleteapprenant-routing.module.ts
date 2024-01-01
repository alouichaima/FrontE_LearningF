import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteapprenantComponent } from './deleteapprenant.component'; 

const routes: Routes = [
  {path:'',component:DeleteapprenantComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteapprenantRoutingModule { }
