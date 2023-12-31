// votre-composant.component.ts

import { Component, OnInit } from '@angular/core';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { apprenant } from 'src/app/models/apprenant.model';
import { User_crudService } from 'src/app/services/user_crud.service';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.component.html',
  styleUrls: ['profil.component.html'],
})
export class profilComponent implements OnInit {
 anyUser: any= {'nom':'','prenom':'', 'datenaiss':'', 'email':'', 'telephone':'' ,'role' :''};
 
 iduser:any
 OneUser:any=[]

  constructor(private userCrudService: User_crudService) {}
 
  ngOnInit(): void {
    const user = this.OneUser; // Ou utilisez la propriété spécifique que vous avez dans OneUser
  
        this.iduser = user.id;
    
this.userCrudService.GetOneUser(this.iduser).subscribe(
  (data) => {
    this.OneUser = data;
  },
  (error) => {
    console.error('Erreur lors de la récupération des données utilisateur', error);
  }
);

  
  }}
