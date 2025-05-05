"use strict";
{
    const person = "bike";
    const user = {
        name: "Tanvir Ahmed",
        age: 25,
        address: "Dhaka"
    };
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    getPropertyValue(user, "name");
}
