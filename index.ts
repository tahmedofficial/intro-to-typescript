// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "Dhaka";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }

class User {
    readonly city: string = "Dhaka";
    constructor(
        public email: string,
        public name: string
    ) {
    }
}

const tanvir = new User("tanvir@ahmed.com", "Tanvir Ahmed")
// tanvir.name

export { }