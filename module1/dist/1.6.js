"use strict";
{
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add(2, 5));
    const poorUser = {
        name: "Tanvir",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
}
