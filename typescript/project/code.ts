let x : number = 3
let y : string = "Holaa"
let z : any = []

interface User {
    name: String,
    age: Number,
    date: String
}

class userAdd {
    users: User[]
    add(user: User) {
        this.users.push(user)
    }
}

let person : User ={
    name: 'Miguh Ruiz',
    age: 15,
    date: 'Hoy'
}

const u = new userAdd()
u.add(person)