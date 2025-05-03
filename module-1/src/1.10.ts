{

    // type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
    // type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
    // type Developer = FullstackDeveloper | FrontendDeveloper;

    // const newDeveloper: FrontendDeveloper = "juniorDeveloper";
    // const developer: Developer = "frontendDeveloper";

    // type User = {
    //     name: string;
    //     email: string;
    //     gender: "male" | "female";
    //     bloodGroup: "O+" | "A+" | "B+" | "AB+"
    // }

    // const user1: User = {
    //     name: "tanvir",
    //     email: "tanvir@gmail.com",
    //     gender: "male",
    //     bloodGroup: "B+"
    // }


    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["Html", "Css", "Express"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }






}