class User{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Hello, ${this.name}`);
    }
}

const userJohn = new User("JOhn");
userJohn.sayHello();

console.log(typeof User);
console.log(userJohn instanceof User);
console.log(userJohn);


class Student{
    constructor(studentId, name, admissionDate, cgpa){
        this.studentId = studentId;
        this.name = name;
        this.admissionDate = admissionDate;
        this.cgpa = cgpa;
    }
    get studentId(){
        return this._studentId;
    }
    get name(){
        return this._name;
    }
    get admissionDate(){
        return this._admissionDate;
    }
    get cgpa(){
        return this._cgpa;
    }
    set studentId(value){
        if(value === null){
            throw new Error("Error: ");
        }
        this._studentId = value;
    }
    set name(value){
        if(value === null){
            throw new Error("Error: ");
        }
        this._name = value;
    }
    set admissionDate(value){
        if(value === null){
            throw new Error("Error: ");
        }
        this._admissionDate = value;
    }
    set cgpa(value){
        if(value === null){
            throw new Error("Error: ");
        }
        this._cgpa = value;
    }
}

// Usase of the class:
const bob = new Student("000-001-01", "Bob John", new Date(1990, 12, 12), 3.89);
console.log(bob);
console.log(bob.__proto__);
Student.prototype.toString = function() {
    return `{StudentId: ${this.studentId}, Name: ${this.name}, 
    DOB: ${this.admissionDate}, CGPA: ${this.cgpa}}`
}

console.log(bob.toString());


//defining getter and setters using getXXX and setXXX methods and also using private variables syntax
class Person{
    //Private fields decleration;
    #name = null;
    #dateOfBirth = null;
    
    constructor(name, dateOfBirth){
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }
    //getters and setters using getXXX
    getName(){
        return this.#name;
    }
    getDateOfBirth(){
        return this.#dateOfBirth;
    }
    setName(value){
        this.#name = value;
    }
    setDateOfBirth(dateOfBirth){
        this.#dateOfBirth = dateOfBirth;
    }
    toString(){
        return `{Name: ${this.#name}, Date Of Birth: ${this.#dateOfBirth}}`;
    }

}

const anna = new Person("Anna", new Date(1998, 10, 10));
console.log(anna.toString());
anna.setName("Anna Leyn Smith");
console.log(anna.toString());



//Implementing inheritance using the 'extends' keyword using 

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} Makes some noise.`);
    }
}

class Dog extends Animal{
    constructor(name, collarColour){
        super(name);
        this.collarColour = collarColour;
    }
    speak(){
        console.log(`${this.name} Barks and has a ${this.collarColour} colour`);
    }

}

let d = new Dog("Mitzi", "red");
d.speak();

//Polymorphism

class Shape{
    area(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape{
    constructor(length, width){
        super();
        this.width = width;
        this.length = length;
    }
    area(){
        return this.length * this.width;
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    area(){
        return 0.5 * this.base * this.height;
    }
}

function calculateArea(shape){
    return shape.reduce((sum, shape) => {
        if(shape instanceof Shape){
            console.log(`Shape ${shape.toString()} -area: ${shape.area()}`);
            return sum + shape.area();
        }
        throw new Error("Invalid argument: " + shape);
    }, 0);
}

const shapes = [
    new Circle(3), new Rectangle(2, 3), new Triangle(3, 4)
];

console.log(calculateArea(shapes));
