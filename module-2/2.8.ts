{

    const creatPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something"
            if (data) {
                resolve(data)
            } else {
                reject("faild to load data")
            }
        })
    }

    const showData = async () => {
        const data = await creatPromise()
        console.log(data);
    }

    showData();

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch("httpa://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        console.log(data);
        return data;

    }

    getTodo();








}