// votre-composant.component.ts

import { Component, OnInit } from '@angular/core';
import { User_crudService } from 'src/app/services/user_crud.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: 'profil.component.html',
  styleUrls: ['profil.component.css'],
})
export class profilComponent implements OnInit {
  // Use a proper User type if available
  OneUser: any = { 'nom': '', 'prenom': '', 'datenaiss': '', 'email': '', 'telephone': '', 'role': '' };

  iduser: any;

  constructor(private userCrudService: User_crudService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Assuming you get the user ID from somewhere
    this.iduser = this.OneUser; // Replace this with the actual user ID or retrieve it from your application logic
    this.route.queryParams.subscribe(params => {
      const yourVariableValue = params['userid'];
      this.iduser =yourVariableValue;

      console.log('Your Variable Value:', yourVariableValue);
      // Now you can use yourVariableValue as needed
    }); 
    

    this.userCrudService.GetOneUser(this.iduser).subscribe(
      (data) => {
        this.OneUser = data;
        // Log to check if data is received correctly
        console.log('User Data:', this.OneUser);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données utilisateur', error);
      }
    )
    

        };
        edit(OneUser:any){
          this.OneUser = OneUser;  }
        UserToUpdate(){
            this.userCrudService.updateUser( this.iduser, this.OneUser).subscribe(
              (resp) => {
              
                   console.log(resp);
                  },
                  (err) => {
                    console.log('Erreur lors de la récupération des données utilisateur', err);
                  });
  }
}
