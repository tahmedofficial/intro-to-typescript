interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail: () => string;
    getCoupon(couponname: string): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const tanvir: Admin = {
    dbId: 332,
    userId: 1234,
    role: "admin",
    email: "tanvir@ahmed.com",
    githubToken: "github",
    startTrail: () => {
        return "trail"
    },
    getCoupon: (name: "tanvir") => {
        return 4
    }
}