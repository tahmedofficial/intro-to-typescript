"use strict";
{
    class Animal {
        // name: string;
        // species: string;
        // sound: string;
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Haski", "dog", "ghew ghew");
    const cat = new Animal("Pasian", "cat", "meaw meaw");
    cat.name;
    console.log([dog.name, cat]);
}
