{
    function add(num1: number, num2: number) {
        return num1 + num2
    }

    console.log(add(2, 5));

    const poorUser = {
        name: "Tanvir",
        balance: 0,
        addBalance(balance: number): number {
            return this.balance + balance
        },
    };

}