let score: number | string = 33;

score = 34;
score = "d"

// type User = {
//     name: string;
//     id: number;
// }

type Admin = {
    name: string;
    id: number;
}

// let tanvir: User = {
//     name: "Tanvir",
//     id: 1234
// }
// tanvir = { name: "ta", id: 3232 }

function getDbId(id: string | number) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}

const data: (string | number)[] = ["4", "2", 3]

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";


