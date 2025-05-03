"use strict";
{
    const user = {
        id: 242,
        name: {
            firstName: "Tanvir",
            middleName: "Ahmed",
            lastName: "Khan"
        },
        contactNo: "01600993826",
        address: "Istanbul, Tyrkey"
    };
    const { contactNo: phoneNum, name: { middleName }, } = user;
    const myFriends = ["Tanvir", "Mohammad", "Fuad", "Sifat", "Ornee", "sunny", "mezba", "salman"];
    const [a, b, c, d, love, ...morePublic] = myFriends;
    console.log(love, morePublic);
}
