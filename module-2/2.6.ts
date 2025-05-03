{

    const addCourseToStudent = <T extends Student1>(student: T): T => {
        const course = "Next level web development";

        return {
            ...student,
            course
        }
    }

    interface Student1 {
        name: string;
        id: number;
        email: string;
        devType: string;
    }

    const student1 = addCourseToStudent<Student1>({
        name: "Tanvir Ahmed",
        id: 242,
        email: "tanvir@gmail.com",
        devType: "Level-2"
    })






}