"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Tanvir Ahmed",
        id: 242,
        email: "tanvir@gmail.com",
        devType: "Level-2"
    });
}
