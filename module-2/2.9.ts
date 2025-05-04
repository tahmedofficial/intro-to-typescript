{

    type A1 = number;
    type B1 = undefined;

    type X = A1 extends null ? true : false;
    type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicale<T> = T extends keyof Sheikh ? true : false;

    type hasBike = CheckVehicale<"bike">









}