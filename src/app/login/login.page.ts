import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async login() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigateByUrl('/tabs'); // or your home page
    } catch (err: any) {
      this.error = err.message;
    }
  }

  async register() {
    try {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      this.router.navigateByUrl('/tabs');
    } catch (err: any) {
      this.error = err.message;
    }
  }
}
