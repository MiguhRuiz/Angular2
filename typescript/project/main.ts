/**
 * Created by miguhruiz on 6/12/16.
 */
import './datos'

class Usuarios{
    usuario: Usuario;
    constructor(name: String, age: Number) {
        this.usuario = {
            name,
            age
        }
        console.log(this.usuario)
    }
}

const u = new Usuarios('Miguh Ruiz', 15)