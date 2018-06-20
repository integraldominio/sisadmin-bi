import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
    private msg: MatSnackBar

  ) { }

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body =  JSON.stringify({username: user.username, password: user.password});
    return this.apiService.post(this.config.login_url, body).map(() => {
      console.log('Login success');
      this.msg.open('Login success');
      this.userService.getMyInfo().subscribe();
    });
  }

  signup(user){
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders).map(() =>{
      console.log('Sign up success');
      this.msg.open('Sign up success');
    });
  }

  logout() {
    return this.apiService.get(this.config.logout_url, {})
      .map(() => {
        this.userService.currentUser = null;
        this.msg.open("Logout success");
      });
  }

  changePassowrd(passwordChanger) {
    return this.apiService.post(this.config.change_password_url, passwordChanger);
  }

}
