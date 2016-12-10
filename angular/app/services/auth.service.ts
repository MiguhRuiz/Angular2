/**
 * Created by miguhruiz on 10/12/16.
 */
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

export interface User{
    email: string,
    password: string
}

const USERS = [
    { email: 'miguh@platzi.com', password: '12345'},
    { email: 'user@platzi.com', password: '789' }
]

@Injectable()

export class AuthService {
    users :User [ ] = USERS
    session :boolean = false

    constructor(
        private router :Router
    ) {

    }

    login(user :User) {
        let user_exist = this.users.find( u => u.email == user.email )

        if(user_exist && user_exist.password == user.password) {
            localStorage.setItem('user', JSON.stringify(user_exist))
            this.session = true
            let link = ['/']
            this.router.navigate(link)
        }
    }

    redirect() {
        let link = ['login']
        this.router.navigate(link)
    }

    logout() {
        this.session = false
        localStorage.removeItem('user')
        this.redirect()
    }

    check() {
        if(localStorage.getItem('user') == null) {
            this.session = false
            this.redirect()
        } else {
            this.session = true
        }
    }

    getSession() {
        return this.session
    }

    user() {
        return localStorage.getItem('user')
    }

}