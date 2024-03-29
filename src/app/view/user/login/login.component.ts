import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ERole } from 'src/app/models/ERole.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient, ) {}

  Login() {
    console.log(this.email);
    console.log(this.password);



    const bodyData = {

      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:8069/api/auth/login", bodyData).subscribe(
      (resultData: any) => {
          console.log("Server Response:", resultData);

          if (resultData.message === "Email not exists") {
            alert("Email does not exist");
        } else if (resultData.message === "Login Success" && resultData.status === true) {
          console.log("Login successful");

          const userRoleValue: string = resultData.userRole; 
          const userIdValue: string = resultData.userId; 

          console.log("id de l'utilisateur :", userIdValue   );

          if (userRoleValue !== undefined && ERole[userRoleValue as keyof typeof ERole]) {
            console.log("Rôle de l'utilisateur :", userRoleValue);


            const userRole: ERole = ERole[userRoleValue as keyof typeof ERole];

            switch (userRole) {
              case ERole.ADMIN:
                console.log("admin");
                this.router.navigate(['/admin/dashboard']);
                break;
              case ERole.FORMATEUR:
                console.log("00000000000000000000000",resultData.id);

                  this.router.navigate(['/apprenant'], { queryParams: { userid: resultData.userId } });
                  break;

              case ERole.APPRENANT:
                console.log("111111111111111111111",resultData.userId);

                  this.router.navigate(['/apprenant/profil'], { queryParams: { userid: resultData.userId } });
                  
                break;
              default:
                console.error("Unknown user role or role not defined");
                this.router.navigate(['/formateur']);
                break;
            }
          } else {
            console.error("Rôle d'utilisateur invalide reçu du serveur :", userRoleValue);
            console.log("Rôles valides :", Object.values(ERole));
          }

        } else {
          alert("Incorrect Email and Password combination");
        }
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }
}
