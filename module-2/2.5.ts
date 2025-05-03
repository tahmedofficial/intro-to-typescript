{
    const creatArray = (param: string): string[] => {
        return [param]
    }
    const result = creatArray("Bangladesh")

    const creatArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    interface User {
        id: string;
        name: string;
    }

    creatArrayWithGeneric<boolean>(true)
    const result2 = creatArrayWithGeneric<User>({
        id: "242-030-111",
        name: "Tanvir Ahmed"
    })

    const creatArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    creatArrayWithTuple<string, number>("Bangladesh", 222);

    const addCourseToStudent = <T>(student: T): T => {
        const course = "Next level web development";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<object>({
        name: "Tanvir Ahmed",
        id: "242-030-111",
        devType: "Level-2"
    })





}