import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLogedIn:boolean = false;
  
  getIsLoggedIn():boolean{
    return this._isLogedIn;
  }

  setIsLoggedIn(value:boolean){
    this._isLogedIn = value
  }

}
