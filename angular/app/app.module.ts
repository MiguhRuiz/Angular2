/**
 * Created by miguhruiz on 7/12/16.
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './components/app.component'
import { CoursesComponent } from './components/course.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}