// class User {
//     public email: string;
//     public name: string;
//     readonly city: string = "Dhaka";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }

class User {
    protected _courseCount: number = 1;
    readonly city: string = "Dhaka";
    constructor(
        public email: string,
        public name: string,
    ) { }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more then 1")
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const tanvir = new User("tanvir@ahmed.com", "Tanvir Ahmed")

// class User {
//     readonly city: string = "Dhaka";
//     constructor(
//         public email: string,
//         public name: string
//     ) { }
// }

// tanvir.name

export { }