/**
 * Created by miguhruiz on 10/12/16.
 */
import { Component } from '@angular/core'
import { AuthService, User } from '../services/auth.service'

@Component({
    selector: 'login-form',
    template: `
        <p>La tienda es privada</p>
        <form (ngSubmit)="login()" #loginForm="ngForm">
        
            <div *ngIf="error" class="error">{{error}}</div>
        
            <label>Tu email:</label>
            <input type="text" required autocomplete="off" [(ngModel)]="user.email" placeholder="Email" name="Email"/>
            <label>Tu password:</label>
            <input type="text" required [(ngModel)]="user.password" placeholder="Password" name="Password"/>
            <button type="submit">Ingresar</button>
        </form>
    `,
    providers: [
        AuthService
    ]
})

export class LoginComponent {
    user :User
    error :string

    constructor(
        private auth :AuthService
    ) {
        this.user = { email: null, password: null }
    }

    login() {
        if(!this.auth.login(this.user)) {
            this.error = "La contraseña es incorrecta"
        }
    }
}