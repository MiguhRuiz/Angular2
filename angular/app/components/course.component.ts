/**
 * Created by miguhruiz on 7/12/16.
 */
import { Component, OnInit } from '@angular/core'
import { Course } from '../common/course'
import { ApiService } from '../services/api.service'

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
    `,
    providers: [
        ApiService
    ]
})

export class CoursesComponent implements OnInit{
    title :String = 'Cursos Disponibles'
    courses : Course []

    constructor(private ApiService :ApiService) {

    }

    getCourses() {
        this.ApiService.getCourses().then(courses => {
            this.courses = courses
        })
    }

    ngOnInit() {
        this.getCourses()
    }
}