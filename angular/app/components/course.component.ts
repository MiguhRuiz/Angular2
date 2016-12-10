/**
 * Created by miguhruiz on 7/12/16.
 */
import { Component, OnInit } from '@angular/core'
import { Course } from '../common/course'
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service'

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
        ApiService,
        AuthService
    ]
})

export class CoursesComponent implements OnInit{
    title :String = 'Cursos Disponibles'
    courses : Course []

    constructor(
        private ApiService :ApiService,
        private Auth :AuthService
    ) {

    }

    getCourses() {
        this.ApiService.getCourses().then(courses => {
            this.courses = courses
        })
    }

    ngOnInit() {
        this.getCourses()
        this.Auth.check()
    }
}