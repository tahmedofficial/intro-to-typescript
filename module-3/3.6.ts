{

    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // addDeposite(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        // setter
        set diposit(amount: number) {
            this._balance = this._balance + amount;
        }

        // getBalance() {
        //     return this._balance;
        // }

        // getter
        get balance() {
            return this._balance;
        }
    }

    const goribAcccount = new BankAccount(242, "Gorib", 20);

    // goribAcccount.addDeposite(400);
    // goribAcccount.getBalance();

    goribAcccount.diposit = 400;
    const balance = goribAcccount.balance;
    console.log(balance);














}