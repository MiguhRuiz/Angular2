/**
 * Created by miguhruiz on 9/12/16.
 */
import { Injectable } from '@angular/core'
import { Course } from '../common/course'

@Injectable()

export class CartService{
    private courses :any
    private detail :any

    constructor() {
        this.courses = {}
        this.detail = { total: 0, items: 0 }
    }

    getCourses() {
        return this.courses
    }

    getDetail() {
        return this.detail
    }

    addToCart(course :Course) {
        if(!this.courses[course.id]) {
            this.courses[course.id] = {
                quantity: 1,
                name: course.name,
                price: course.price
            }
        } else {

            this.courses[course.id].quantity += 1

        }

        this.detail.total += course.price
        this.detail.items += 1

    }
}