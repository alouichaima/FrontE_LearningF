import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddapprenantComponent } from './addapprenant.component';

const routes: Routes = [
  {path:'',component:AddapprenantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddapprenantRoutingModule { }
