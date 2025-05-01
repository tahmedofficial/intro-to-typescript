"use strict";
{
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("Their is nothing ot search");
        }
    };
    searchName("tanvir");
    const getSpeedInMetterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseInt(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
    };
    getSpeedInMetterPerSecond("1000 f");
    // const throwError = (message: string): never => {
    //     throw new Error(message);
    // }
    // throwError("404")
}
