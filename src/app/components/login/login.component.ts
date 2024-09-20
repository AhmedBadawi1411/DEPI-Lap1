import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  msg: string = '';

  constructor(private _http:HttpService ,private _router: Router, private _data:HttpService, private _loginService:LoginService){}

  ngOnInit(): void {
    if (localStorage.getItem('userToken')) {
      this._router.navigate(['/payment']);
    }  
  }

  onSubmit(): void {
    this._http.getUser(this.email).subscribe({
      next: (data) => {
        if (data.length > 0 ) {
          if (data[0].password == this.password) {
            this._loginService.setIsLoggedIn(true);
            localStorage.setItem('userToken', data[0].userId);
            this._router.navigate(['/payment']);
          }else{
            this.msg = 'Invalid password';
          }
        }else{
          this.msg = 'Email not found';
        }
      },
      error(err) {
        
      },
      complete() {}

    }
    )
  }
}
