"use strict";
{
    let anything;
    anything = "next level web dev";
    anything = 222;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseInt(value);
            return `Converted value ${convertedValue * 1000}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    console.log({ result1, result2 });
}
