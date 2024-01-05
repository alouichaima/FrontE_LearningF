import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
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
  telephone! : string;
  datenaiss! : Date;

  OneUser: any = { 'nom': '', 'prenom': '', 'datenaiss': '', 'email': '', 'telephone': '', 'role': '' };
  userId: any;

  image!: any;
  messageSuccess: any;
  messageError: any;
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
        );
  
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
        this.telephone = user.telephone;
        this.datenaiss = user.datenaiss;
        
  
        console.log();
      
      
      }
    
   

      

          };
       
