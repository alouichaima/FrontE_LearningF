// votre-composant.component.ts

import { Component, OnInit } from '@angular/core';
import { User_crudService } from 'src/app/services/user_crud.service';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.component.html',
  styleUrls: ['profil.component.html'],
})
export class profilComponent implements OnInit {
  // Use a proper User type if available
  OneUser: any = { 'nom': '', 'prenom': '', 'datenaiss': '', 'email': '', 'telephone': '', 'role': '' };

  iduser: any;

  constructor(private userCrudService: User_crudService) {}

  ngOnInit(): void {
    // Assuming you get the user ID from somewhere
    this.iduser = any; // Replace this with the actual user ID or retrieve it from your application logic

    this.userCrudService.GetOneUser(this.iduser).subscribe(
      (data) => {
        this.OneUser = data;
        // Log to check if data is received correctly
        console.log('User Data:', this.OneUser);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données utilisateur', error);
      }
    );
  }
}
