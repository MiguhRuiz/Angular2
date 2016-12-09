/**
 * Created by miguhruiz on 9/12/16.
 */
import { Component, Input } from '@angular/core'
import { Course } from '../../common/course'

@Component({
    selector: 'coursebox',
    template: `
    <div class="course">
        <img [src]="course.image"/>
        <h2>{{course.name}}</h2>
        <span class="price">
            {{course.price | currency: 'USD': true :'1.2-2'}}
        </span>
        <button>Agregar al carrito</button>
    </div>
    `
})

export class CourseBoxComponent {
    @Input()
    course: Course
}