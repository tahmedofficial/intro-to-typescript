{

    interface Developer<T, Y = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releseYear: number;
        };
        smartWatch: T;
        bike: Y
    }

    const poorDeveloper: Developer<{
        brand: string;
        model: string;
        display: string;
    }> = {
        name: "Tanvir",
        computer: {
            brand: "Dell",
            model: "insporon",
            releseYear: 2019
        },
        smartWatch: {
            brand: "Samsung",
            model: "Watch-3",
            display: "Oled"
        },
        bike: null
    }

    const richDeveloper: Developer<{
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }, {
        brand: string
    }> = {
        name: "Tanvir Ahmed",
        computer: {
            brand: "Hp",
            model: "insporon",
            releseYear: 2019
        },
        smartWatch: {
            brand: "Apple",
            model: "Watch-3",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: "yamaha"
        }
    }



}