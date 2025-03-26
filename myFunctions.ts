function addTwo(num: number) {
    return num + 2
}

function signUpUser(name: string, email: string, isPaid: boolean): string {
    return "4"
}

function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    }
}

const getHello = (): string => {
    return "Tanvir";
}

const heros = ["thor", "superman", "ironman"]

heros.map((hero: string): string => {
    return "";
})

function consoleError(errmsg: string): void {
    console.log(errmsg);

}
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

signUpUser("", "", true);

console.log(addTwo(4));

export {

};