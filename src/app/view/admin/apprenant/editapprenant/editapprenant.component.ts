import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apprenant } from 'src/app/models/apprenant.model';
import { ApprenantService } from 'src/app/services/apprenant.service';

@Component({
  selector: 'app-editapprenant',
  templateUrl: './editapprenant.component.html',
  styleUrls: ['./editapprenant.component.css']
})
export class EditapprenantComponent implements OnInit {

  apprenantForm: apprenant = {
    // id: 0,
    nom: '',
    prenom: '',
    datenaiss : '',
    email:'',
    telephone: '',
    photo:'',
  };
  displayedColumns: string[] = ['nom', 'prenom',  'email', 'datenaiss', 'telephone','photo'];


  constructor(
    private apprenantService: ApprenantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const apprenantId = params['id'];
      this.getById(apprenantId); // Utilisez l'ID du apprenant pour obtenir ses détails
    });
  }


  getById(id: number) {
    this.apprenantService.getById(id).subscribe((data) => {
      this.apprenantForm = data;
    });
  }

  update() {
    this.apprenantService.update(this.apprenantForm).subscribe(() => {
      this.router.navigate(['/admin/listeapprenant']);
    });
  }

}
