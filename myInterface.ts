interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail: () => string;
    getCoupon(couponname: string): number;
}

const tanvir: User = {
    dbId: 332,
    userId: 1234,
    email: "tanvir@ahmed.com",
    startTrail: () => {
        return "trail"
    },
    getCoupon: (couponname: "tanvir") => {
        return 4
    }
}