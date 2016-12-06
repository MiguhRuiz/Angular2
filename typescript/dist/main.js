"use strict";
/**
 * Created by miguhruiz on 6/12/16.
 */
require('./datos');
var Usuarios = (function () {
    function Usuarios(name, age) {
        this.usuario = {
            name: name,
            age: age
        };
        console.log(this.usuario);
    }
    return Usuarios;
}());
var u = new Usuarios('Miguh Ruiz', 15);
//# sourceMappingURL=main.js.map