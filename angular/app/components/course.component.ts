/**
 * Created by miguhruiz on 7/12/16.
 */
import { Component } from '@angular/core'
import { Course } from '../common/course'

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
            <coursebox
                [course]="course_info"
                *ngFor="let course_info of courses">   
            </coursebox>
        </div>
    `
})

export class CoursesComponent {
    title :String = 'Cursos Disponibles'
    courses : Course [] = COURSES
}