{

    const age: number = 16
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });

    const isAuthenticated = false
    const result = isAuthenticated ?? "Guest";
    console.log(result);


    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            premanentAddress?: string;
        }
    }

    const user: User = {
        name: "tanvir ahmed",
        address: {
            city: "Dhake",
            road: "Shahjahanpur rd",
            presentAddress: "Shahjahanpur",
            premanentAddress: "yes"
        }
    }


    const premanentAddress = user?.address?.premanentAddress ?? "No premanent address"
    console.log({ premanentAddress });









}