import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeapprenantComponent } from './listeapprenant.component';

const routes: Routes = [
  {path:'', component:ListeapprenantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeapprenantRoutingModule { }
