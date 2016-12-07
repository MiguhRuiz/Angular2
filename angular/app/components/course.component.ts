/**
 * Created by miguhruiz on 7/12/16.
 */
import { Component } from '@angular/core'

export interface Course {
    id :Number,
    name :String,
    image :String,
    price :Number
}

const COURSES :Course[] = [
    {
        id: 1,
        name: 'Angular 2',
        image: '../../assets/angular.png',
        price: 80
    },
    {
        id: 2,
        name: 'Python',
        image: '../../assets/python.png',
        price: 82
    }
]

@Component({
    selector: 'courses',
    template:
    `
        <h2>{{title}}</h2>
        <div class="courses_list">
            <div class="course" *ngFor="let course of courses">
                <img [src]="course.image"/>
                <h2>{{course.name}}</h2>
                <span class="price">
                    {{course.price | currency: 'USD': true :'1.2-2'}}
                </span>
                <button>Agregar al carrito</button>
            </div>
        </div>
    `
})

export class CoursesComponent {
    title :String = 'Cursos Disponibles'
    courses : Course [] = COURSES
}