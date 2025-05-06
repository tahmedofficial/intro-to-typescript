"use strict";
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposite(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this._balance;
        }
    }
    const goribAcccount = new BankAccount(242, "Gorib", 20);
    goribAcccount.addDeposite(400);
    goribAcccount.getBalance();
}
