"use strict"
export class Person{
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }
    get name(){
        return this._name;
    }
    get dob(){
        return this._dob;
    }
    set name(name){
        this._name = name;
    }
    set dob(dob){
        this._dob = dob;
    }
    
    toString(){
        return `Name: ${this._name} and Date of birth: ${this._dob}`;
    }
}