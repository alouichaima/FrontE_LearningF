import { ApprenantService } from './../../../../services/apprenant.service';
import { Component, OnInit } from '@angular/core';
import { apprenant } from 'src/app/models/apprenant.model';
import { DeleteapprenantComponent } from '../deleteapprenant/deleteapprenant.component';
import { MatDialog } from '@angular/material/dialog';
apprenant
@Component({
  selector: 'app-listeapprenant',
  templateUrl: './listeapprenant.component.html',
  styleUrls: ['./listeapprenant.component.css']
})
export class ListeapprenantComponent implements OnInit{

  allApprenantsSource: apprenant[] = [];
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'datenaiss', 'telephone', 'photo', 'actions'];

  constructor(private apprenantService: ApprenantService ,     public dialog: MatDialog) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.apprenantService.get().subscribe((data) => {
      this.allApprenantsSource = data;
    });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteapprenantComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allApprenantsSource = this.allApprenantsSource.filter(
          (_) => _.id !== id
        );
      }
    });
  }


}
