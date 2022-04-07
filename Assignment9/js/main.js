"use strict";
//Question no 1:
const person = {
  name: "",
  dateOfBirth: null,
  getName: () => {
    return this.name;
  },
  getDateOfBirth: () => {
    return this.dateOfBirth;
  },
  setName: (name) => {
    this.name = name;
  },
  setDOB: (dateOfBirth) => {
    this.dateOfBirth = dateOfBirth;
  },
  toString: () => {
    return `Name: ${this.name} and DOB: ${this.dateOfBirth}`;
  },
};

let joe = Object.create(person);
joe.setName("Joe");
joe.setDOB(new Date(1998, 6, 6));

console.log(joe.toString());


// Question no 2:

let employee = {
    salary: 0,
    hireDate: new Date().getFullYear(),
    doJob: (jobTitle)=>{
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
    },
    setSalary: (salary)=>{
        this.salary = salary;
    }
}

employee.__proto__ = person;

let sunil = Object.create(employee);
sunil.setName("Sunil");
sunil.setSalary(200000000000);

sunil.doJob("Programmer");


// Question no 3:
function Person(name1, dob){
    let name = name1;
    let dateOfBirth = dob;
    
    function toString(){
        console.log(`Name: ${name}, DateOfBirth: ${dateOfBirth}`);
    }
    return toString;
}

let anna = Person("Anna", new Date(1992, 12, 12));
anna;



