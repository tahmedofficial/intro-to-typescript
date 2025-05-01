{

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "Tanvir",
        age: 25,
        gender: "male",
        contactNo: "01600993826",
        address: "Dhaka"
    }
    const student2: Student = {
        name: "Tanvir",
        age: 25,
        gender: "male",
        contactNo: "01600993826",
        address: "Dhaka"
    }
    const student3: Student = {
        name: "Tanvir",
        age: 25,
        gender: "male",
        contactNo: "01600993826",
        address: "Dhaka"
    }

    type UserName = string;
    type IsAdmin = boolean;

    const userName: UserName = "tanvir";
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;



}