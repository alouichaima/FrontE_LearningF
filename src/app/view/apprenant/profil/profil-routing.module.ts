import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{profilComponent} from './profil.component'

const routes: Routes = [
  {path:'',component:profilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
