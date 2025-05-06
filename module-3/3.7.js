"use strict";
{
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            return this.count = this.count + 1;
        }
        decrement() {
            return this.count = this.count - 1;
        }
    }
    const instance1 = new Counter();
    console.log(instance1.increment());
    const instance2 = new Counter();
    console.log(instance2.increment());
}
