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

// identityThree<Bootle>({ brand: "", type: 4 })

function getSearchProducts<Type>(products: Type[]): Type {
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProduct = <Type>(products: Type[]): Type => {
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    userName: string,
    password: string,
}

function anotherFunction<T extends string, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    }
}

anotherFunction("3", { connection: "", userName: "", password: "" })

interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}









export { }