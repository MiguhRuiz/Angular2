/**
 * Created by miguhruiz on 7/12/16.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { AppComponent } from './components/app.component'
import { CoursesComponent } from './components/course.component'
import { CourseBoxComponent } from './components/coursebox.component'
import { CartComponent } from './components/cart.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CoursesComponent,
        CourseBoxComponent,
        CartComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}