/**
 * Created by miguhruiz on 7/12/16.
 */
/// <reference path="../typings/globals/jquery/index.d.ts"/>

import * as $ from 'jquery'

class Interaction {
    constructor() {
        $('#button_1').click(
            () => {
                console.log('Click me')
                $(this).css('color', 'red')
            }
        )
    }
}

new Interaction()