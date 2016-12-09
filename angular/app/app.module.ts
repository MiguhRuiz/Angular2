/**
 * Created by miguhruiz on 7/12/16.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './components/app.component'
import { CoursesComponent } from './components/course.component'
import { CourseBoxComponent } from './components/coursebox.component'
import { CartComponent } from './components/cart.component'
import { WelcomeComponent } from './components/welcome.component'
import { CourseDetail } from './components/details.component'


const routes = [
    {
        path: '',
        component: WelcomeComponent

    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'course/:id',
        component: CourseDetail
    }
]

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        CoursesComponent,
        CourseBoxComponent,
        CartComponent,
        WelcomeComponent,
        CourseDetail
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}