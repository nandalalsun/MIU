"use strict"
import { Person } from "./person.mjs";

export class Employee extends Person{
    constructor(name, salary){
        super(name, new Date(Date.now()));
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
    doJob(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`)
    }
}