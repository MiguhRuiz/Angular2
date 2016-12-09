/**
 * Created by miguhruiz on 9/12/16.
 */
import { Component, Input } from '@angular/core'
import { Course } from '../common/course'
import { CartService } from '../services/cart.service'
import { Router } from '@angular/router'
@Component({
    selector: 'coursebox',
    template: `
    <div class="course">
        <img [src]="course.image" (click)="goToDetails(course)"/>
        <h2>{{course.name}}</h2>
        <span class="price">
            {{course.price | currency: 'USD': true :'1.2-2'}}
        </span>
        <button (click)="add(course)">Agregar al carrito</button>
    </div>
    `
})

export class CourseBoxComponent {
    @Input()
    course: Course

    constructor(
        private CartService :CartService,
        private Router :Router
    ){

    }
    add(course :Course) {
       this.CartService.addToCart(course)
    }

    goToDetails(course :Course){
        let link = ['/course', course.id]
        this.Router.navigate(link)
    }
}