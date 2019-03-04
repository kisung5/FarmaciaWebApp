import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

    password = 'admin';
    user = 'admin';

    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login(userTemp: string, pass: string) {
        this.message = 'Trying to log in ...';

        if ( userTemp === this.user && pass === this.password ) {
            this.authService.login().subscribe(() => {
                this.setMessage();
                if (this.authService.isLoggedIn) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/bombatica/admin';

                    // Redirect the user
                    this.router.navigate([redirect]);
                }
            });
        } else {
            this.message = 'Usuario o contraseña incorrectos.';
        }
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}