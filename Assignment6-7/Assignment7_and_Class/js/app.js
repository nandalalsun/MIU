var count = (function(){
    var counter = 0;
   function add(){
            return counter += 1;
        }
    function reset(){
            return counter = 0;
        }
    return {
        add: add,
        reset: reset,
    }
})();

// console.log(count.add());
// console.log(count.add());
// console.log(count.add());
// console.log(count.add());
// console.log(count.reset());


// Question no 6: free variable is 'count' inside add() and reset() function.

function adder(n){
    var counter = 0;
        return function(){
            return counter += n;
        }
    }
   

add5 = adder(5);
add6 = adder(6);

add5();
add5();

add6();
add6();


// console.log(add5());
// console.log(add6());

// Question no 9: IIFE and block scope will eleminate this problem. 



var Employee = (function(){
    let name = null;
    let age = null;
    let salary = null;

    function getName(){
        return name;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }

    function setName(newName){
        name = newName;
    }
    function setAge(age){
        age = newAge;
    }
    function setSalary(newSalary){
        salary = newSalary;
    }
    function increaseSalary(percentage){
        salary = salary * (percentage / 100);
    }
    return {
        getAge: getAge,
        getName: getName,
        getSalary: getSalary,
        setAge: setAge,
        setName: setName,
        setSalary: setSalary,
        increaseSalary: increaseSalary
    }
})();



const address = {
    state: "state",
    city: "city",
    zip: "1234",
    getAddress: function(){
        return this.state + " " + this.city + " " + this.zip;
    },
    setAddress: function(state, city, zip){
        this.city = city; this.state = state; this.zip = zip;
    }
}

Employee.address = address;

Employee.address.setAddress("IA", "Fairfield", 52557);

console.log(Employee.address.getAddress());

