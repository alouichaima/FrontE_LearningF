import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material/dialog';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { inject } from '@angular/core';

@Component({
  selector: 'app-deleteapprenant',
  templateUrl: './deleteapprenant.component.html',
  styleUrls: ['./deleteapprenant.component.css']
})
export class DeleteapprenantComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteapprenantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apprenantService: ApprenantService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
   this.apprenantService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}


