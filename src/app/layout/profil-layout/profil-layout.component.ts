
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/userService.service';

@Component({
  selector: 'app-profil-layout',
  templateUrl: './profil-layout.component.html',
  styleUrls: ['./profil-layout.component.css']
})
export class ProfilLayoutComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserServiceService) {}

  ngOnInit() {
    // Assurez-vous que currentUser est défini avant de l'utiliser
    if (this.userService.currentUser) {
      this.user = this.userService.currentUser;
      console.log('User Details:', this.user); // Ajoutez cette ligne pour le débogage
    }
  }

}
