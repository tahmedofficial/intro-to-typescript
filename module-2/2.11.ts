{

    type Preson = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Email = Preson["email"]


    type NameAge = Pick<Preson, "name" | "age">

    type ContactInfo = Omit<Preson, "name" | "age">

    type PresonRequired = Required<Preson>

    type PersonPartial = Partial<Preson>

    type PersonReadonly = Readonly<Preson>

    // type MyObject={
    //     a:string;
    //     b:string;
    // }

    type MyObject = Record<string, string>

    const myObject: MyObject = {
        a: "aa",
        b: "bb",
        c: "cc"
    }

    const emptyObject: Record<string, unknown> = {

    }












}