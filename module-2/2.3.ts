{

    // const rollNumber: number[] = [1, 2, 3, 4, 5]
    const rollNumber: Array<number> = [1, 2, 3, 4, 5]

    // const mentors: string[] = ["mr.bin", "mr.y", "mr.z"]
    const mentors: Array<string> = ["mr.bin", "mr.y", "mr.z"]

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: Array<boolean> = [true, false, true]


    type GenericArray<T> = Array<T>

    const rollNumber2: GenericArray<number> = [1, 2, 3, 4, 5]

    const mentors2: GenericArray<string> = ["mr.bin", "mr.y", "mr.z"]

    const boolArray2: GenericArray<boolean> = [true, false, true]

    type UserObj = {
        name: string;
        age: number;
    }

    const user: GenericArray<UserObj> = [
        {
            name: "tanvir",
            age: 25
        },
        {
            name: "jhanker",
            age: 36
        },
        {
            name: "Ornee",
            age: 20
        }
    ]

    type GenericTuple<x, y> = [x, y]

    const human: string[] = ["ornee", "tanvir", "others"]
    const human2: [string, string] = ["ornee", "tanvir"]
    const human3: GenericTuple<string, string> = ["ornee", "tanvir"]


    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, {
        name: "tanvir",
        email: "tanvir@gmail.com"
    }]




}