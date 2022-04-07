/**
 * main.js
 */

import { greeting } from "./module/greeting.js";

const greet = function(name){
    console.log(`${greeting} ${name}`);
}
greet("Anna");


import {add, sub, mul, div} from "./module/arithops.js";

console.log(add(1,2));
console.log(sub(3, 1));
console.log(mul(2,4));
console.log(div(4,2));

import { Account } from "./banking_module/account.js";

const accounts = [
    new Account(1234, "Anna", 1200),
    new Account(0001, "Sunil", 200000000),
    new Account(00012, "Nabiyat", 200000)
]; 
accounts.forEach(a => console.log(a));