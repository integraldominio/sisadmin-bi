import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor( private router: Router) {}

  ngOnInit() {
  }

  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate( ['home'] );
    } else {
      alert('"Invalid credentials');
    }
  }
}
