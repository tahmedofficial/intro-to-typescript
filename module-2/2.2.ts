{
    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string };

    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    }


    const user: UserWithRole2 = {
        name: "Tanvir",
        age: 25,
        role: "242-030-111"
    }


    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }


    const rollNumber: Roll2 = [4, 5, 6, 7, 7]

    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => {
        return num1 + num2;
    }



}