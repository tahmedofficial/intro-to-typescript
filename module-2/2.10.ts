{

    const arrOfNumbers: number[] = [1, 4, 5];

    const arrOfStrings: string[] = arrOfNumbers.map(num => num.toString());


    type AreaNumber = {
        height: number;
        width: number;
    }


    type Height = AreaNumber["height"];

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{ height: string; width: number }> = {
        height: "",
        width: 3
    }


















}