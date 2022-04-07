"use strict"
import { Employee } from "./js/model/employee.mjs";
import { Person } from "./js/model/person.mjs";

let persons = [new Person("Bob", new Date(1998,10,10))];

let emp1 = new Employee("Jason", 250000);
emp1.doJob('Programmer');
persons.forEach((p) => console.log(p.toString()));
