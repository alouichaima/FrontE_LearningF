import { Component, OnInit } from '@angular/core';
import { User_crudService } from 'src/app/services/user_crud.service';

@Component({
  selector: 'app-profil-layout',
  templateUrl: './profil-layout.component.html',
  styleUrls: ['./profil-layout.component.css']
})
export class ProfilLayoutComponent implements OnInit {
  user: any;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showApprenantBoard = false;
  showFormateurBoard = false;
  prenom!: string;
  email!: string;
  nom!: string;

  OneUser: any = [];
  userId: any;

  image!: any;
  messageSuccess: any;
  messageError: any;
  iduser: any;

  constructor(private userCrudService: User_crudService) {}

  ngOnInit(): void {
    this.userCrudService.GetOneUser(this.iduser).subscribe(
      (data) => {
        this.OneUser = data;
  
        // Assurez-vous que user est défini avant d'essayer d'accéder à ses propriétés
        const user = this.OneUser; // Ou utilisez la propriété spécifique que vous avez dans OneUser
  
        this.userId = user.id;
        this.roles = user.roles;
        this.showAdminBoard = this.roles.includes('ADMIN');
        this.showApprenantBoard = this.roles.includes('APPRENANT');
        this.showFormateurBoard = this.roles.includes('FORMATEUR');
        this.nom = user.nom;
        this.prenom = user.prenom;
        this.email = user.email;
        this.image = user.photo;
  
        console.log();
      },
      (error) => {
        console.error('Erreur lors de la récupération des données utilisateur', error);
      }
    );
  }
  
}
