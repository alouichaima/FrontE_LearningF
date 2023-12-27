import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  currentUser: user = {};

  setUserDetails(newUser: user) {
    this.currentUser = { ...newUser };
  }


}
