import { ProfilLayoutComponent } from './layout/profil-layout/profil-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlayoutComponent } from './layout/user_layout/userlayout/userlayout.component';
import { AdminLayoutComponent } from './layout/admin_layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:'',component:UserlayoutComponent,children:[
    {path:'',loadChildren:()=>import('./view/user/home/home.module').then(m=>m.HomeModule)} ,
    {path:'login',loadChildren:()=>import('./view/user/login/login.module').then(m=>m.LoginModule)},
    {path:'inscription',loadChildren:()=>import('./view/user/inscri/inscri/inscri.module').then(m=>m.InscriModule)},
    {path:'formation',loadChildren:()=>import('./view/user/formation/formation.module').then(m=>m.FormationModule)},

  ]},

  {path:'admin',component:AdminLayoutComponent,children:[

    {path:'',loadChildren:()=>import('./view/admin/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./view/admin/dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'addformateur',loadChildren:()=>import('./view/admin/formateur/addformateur/addformateur.module').then(m=>m.AddformateurModule)},
    {path:'editformateur/:id',loadChildren:()=>import('./view/admin/formateur/editformateur/editformateur.module').then(m=>m.EditformateurModule)},
    {path:'listeformateur',loadChildren:()=>import('./view/admin/formateur/listeformateur/listeformateur.module').then(m=>m.ListeformateurModule)},
    {path:'deleteformateur',loadChildren:()=>import('./view/admin/formateur/deleteformateur/deleteformateur/deleteformateur.module').then(m=>m.DeleteformateurModule)},

  ]},

  {path:'apprenant',component:ProfilLayoutComponent,children:[
    {path:'message',loadChildren:()=>import('./view/apprenant/message/message.module').then(m=>m.MessageModule)},



  ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
