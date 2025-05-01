{
    const bros1: string[] = ["mir", "firoz", "mizan"]
    const bros2: string[] = ["fuad", "sunny", "sifat"]
    bros1.push(...bros2);
    console.log(bros1);


    const mentors1 = {
        typescript: "mezba",
        redux: "mir",
        dbms: "mizan"
    }

    const mentors2 = {
        prisma: "firoz",
        next: "tonmoy",
        cloud: "nahid"
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    const greatFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greatFriends("tanvir", "mohammad", "fuad", "yaaz");


}