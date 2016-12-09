/**
 * Created by miguhruiz on 7/12/16.
 */
import { Component } from '@angular/core'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'my-app',
  template:
  `
    <header>
        Cursos Platzi
    </header>
    <section>
        <courses></courses>
        <cart></cart>
    </section>
  `,
  providers: [
      CartService
  ]
})

export class AppComponent {}