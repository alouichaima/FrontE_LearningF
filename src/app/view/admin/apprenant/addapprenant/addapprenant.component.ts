import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User_crudService } from 'src/app/services/user_crud.service';
import { apprenant } from 'src/app/models/apprenant.model';
import { ApprenantService } from 'src/app/services/apprenant.service';


@Component({
  selector: 'app-addapprenant',
  templateUrl: './addapprenant.component.html',
  styleUrls: ['./addapprenant.component.css']
})
export class AddapprenantComponent implements OnInit  {

  apprenantForm: apprenant = {
    // id: 0,
    nom: '',
    prenom: '',
    datenaiss : '',
    email:'',
    telephone: '',
    photo:'',
  };

  constructor(
    private apprenantService: ApprenantService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {

    this.apprenantService.create(this.apprenantForm).subscribe(() => {
      this.router.navigate(['/admin/listeapprenant']);
    });
  }

}
