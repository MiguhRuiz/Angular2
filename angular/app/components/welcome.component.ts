/**
 * Created by miguhruiz on 9/12/16.
 */
import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'

@Component({
    selector: 'wellcome',
    template: `
        <h2>Bienvenido a nuestra tienda en línea</h2>
    `
})

export class WelcomeComponent implements OnInit{
    constructor(
       private auth :AuthService
    ) {}

    ngOnInit() {
        this.auth.check()
    }
}