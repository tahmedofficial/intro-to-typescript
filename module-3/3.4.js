"use strict";
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBarking() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log("I am meaw");
        }
    }
    const getAnimal = (animal) => {
        if (animal instanceof Dog) {
            animal.makeBarking();
        }
        else if (animal instanceof Cat) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Haski", "Dog");
    const cat = new Cat("Parsian", "Cat");
    console.log("1", Dog);
    getAnimal(dog);
}
