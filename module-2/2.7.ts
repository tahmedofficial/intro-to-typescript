{

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";
    type Owner2 = keyof Vehicle;

    const person: Owner2 = "car";

    type User = {
        name: string;
        age: number;
        address: string;
    }

    const user: User = {
        name: "Tanvir Ahmed",
        age: 25,
        address: "Dhaka"
    }

    function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
        return obj[key];
    }

    getPropertyValue(user, "name")







}