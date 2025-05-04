"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const creatPromise = () => {
        return new Promise((resolve, reject) => {
            const data = "something";
            if (data) {
                resolve(data);
            }
            else {
                reject("faild to load data");
            }
        });
    };
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield creatPromise();
        console.log(data);
    });
    showData();
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch("httpa://jsonplaceholder.typicode.com/todos/1");
        const data = yield res.json();
        console.log(data);
        return data;
    });
    getTodo();
}
