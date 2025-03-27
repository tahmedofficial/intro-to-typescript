// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "Dhaka";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Dhaka";
    }
    return User;
}());
var tanvir = new User("tanvir@ahmed.com", "Tanvir Ahmed");
// tanvir.name
