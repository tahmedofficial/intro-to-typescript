"use strict";
{
    const creatArray = (param) => {
        return [param];
    };
    const result = creatArray("Bangladesh");
    const creatArrayWithGeneric = (param) => {
        return [param];
    };
    creatArrayWithGeneric(true);
    const result2 = creatArrayWithGeneric({
        id: "242-030-111",
        name: "Tanvir Ahmed"
    });
    const creatArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    creatArrayWithTuple("Bangladesh", 222);
    const addCourseToStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Tanvir Ahmed",
        id: "242-030-111",
        devType: "Level-2"
    });
}
