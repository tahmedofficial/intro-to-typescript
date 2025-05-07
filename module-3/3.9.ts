{

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("Start the car engine");
        };
        stopEngine(): void {
            console.log("Stop the car engine");
        };
        move(): void {
            console.log("Moving the car");
        };
        test() {
            console.log("Anything you want");
        };
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();


    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log("Anything you want");
        };
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log("Start car");
        }
        stopEngine(): void {
            console.log("Stop car");
        }
        move(): void {
            console.log("Moving the car");
        }
    }


    const hondaCar = new ToyotaCar();












}