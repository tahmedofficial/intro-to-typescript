"use strict";
var _a, _b;
{
    const age = 16;
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({ isAdult });
    const isAuthenticated = false;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log(result);
    const user = {
        name: "tanvir ahmed",
        address: {
            city: "Dhake",
            road: "Shahjahanpur rd",
            presentAddress: "Shahjahanpur",
            premanentAddress: "yes"
        }
    };
    const premanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.premanentAddress) !== null && _b !== void 0 ? _b : "No premanent address";
    console.log({ premanentAddress });
}
