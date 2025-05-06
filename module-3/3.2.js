"use strict";
{
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Tanvir", 26, "Istanbul");
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Manik Sir", 34, "Dhaka", "Assis Professor");
}
