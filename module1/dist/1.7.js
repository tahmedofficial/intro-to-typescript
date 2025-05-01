"use strict";
{
    const bros1 = ["mir", "firoz", "mizan"];
    const bros2 = ["fuad", "sunny", "sifat"];
    bros1.push(...bros2);
    console.log(bros1);
    const mentors1 = {
        typescript: "mezba",
        redux: "mir",
        dbms: "mizan"
    };
    const mentors2 = {
        prisma: "firoz",
        next: "tonmoy",
        cloud: "nahid"
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    const greatFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greatFriends("tanvir", "mohammad", "fuad", "yaaz");
}
