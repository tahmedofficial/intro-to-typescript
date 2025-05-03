{
    let anything: any;
    anything = "next level web dev";
    anything = 222;
    (anything as string)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseInt(value)
            return `Converted value ${convertedValue * 1000}`;
        }

        if (typeof value === "number") {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;


    console.log({ result1, result2 });

    type CustomError = {
        message: string;
    };


    try {

    } catch (error) {
        console.log((error as CustomError).message);

    }

}