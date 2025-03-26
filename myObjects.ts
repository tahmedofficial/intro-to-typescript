const user = {
    name: "Tanvir Ahmed",
    email: "tanvir@gmail.com",
    isActive: true
}

const newUser = { name: "Tanvir Ahmed", isActive: true, email: "tanvir@ahmed.com" }


function createCourse(): { name: string, price: number } {
    return { name: "", price: 4 }
}

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }



type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

let myUser: User = {
    _id: "123",
    name: "",
    email: "",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



export { }