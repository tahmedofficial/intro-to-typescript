const score: Array<number> = [];
const names: Array<string> = [];

function indentityOne(val: number | boolean): number | boolean {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree("5")

interface Bootle {
    brand: string,
    type: number
}

identityThree<Bootle>({ brand: "", type: 4 })










export { }