import { role } from './role.model';
export class user {
  id?:any;
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
  datenaiss?: Date;
  telephone?: string;
  constructor(nom:string , prenom:string , datenaiss:Date,email: string, password: string,
    telephone: string ){
         this.nom=nom;
         this.prenom=prenom;
         this.datenaiss=datenaiss;
         this.email=email;
         this.password=password;
         this.telephone=telephone;
       

       }
}
