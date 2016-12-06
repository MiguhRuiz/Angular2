var x = 3;
var y = "Holaa";
var z = [];
var userAdd = (function () {
    function userAdd() {
    }
    userAdd.prototype.add = function (user) {
        this.users.push(user);
    };
    return userAdd;
}());
var person = {
    name: 'Miguh Ruiz',
    age: 15,
    date: 'Hoy'
};
var u = new userAdd();
u.add(person);
//# sourceMappingURL=code.js.map