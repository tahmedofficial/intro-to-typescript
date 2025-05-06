{

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {

        if ("role" in user) {
            console.log(`My name ${user.name} and my role is ${user.role}`);
        }
    }











}