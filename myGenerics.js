"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function indentityOne(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("5");
// identityThree<Bootle>({ brand: "", type: 4 })
function getSearchProducts(products) {
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProduct = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
