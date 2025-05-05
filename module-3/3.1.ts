{
    // Class components

    class Animal {

        constructor(public name: string, public species: string, public sound: string) { }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("Haski", "dog", "ghew ghew");
    const cat = new Animal("Pasian", "cat", "meaw meaw")
    cat.name

    console.log([dog.name, cat]);









}