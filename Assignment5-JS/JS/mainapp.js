// the first historic javaScript


//Question no 1
function max(a, b){
    return a < b ? b : a;
}

console.log(max(3, 7));

//Question no 2
function maxOfThree(a, b, c){
    let maxOftwo = a < b ? b : a;
    return maxOftwo < c ? c : maxOftwo;
}

//Question no 3
function isVowel(a){ 
    var a = a.toLowerCase();
    if(a === "a" || a === "e" || a === "i" || a === "o" || a === "u"){
       return true;
    }
}

//Question no 4
function sum(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}

//Question no 4 1
function multiply(a){
    let mul = 1;
    for(let i = 0; i < a.length; i++){
        mul = mul * a[i];
    }
    return mul;
}


//Question no 5
function reversr(a){
    let rev = "";
    for(let i = 0; i < a.length; i++){
        rev = a.charAt(i) + rev;
    }
    return rev;
}


//Question no 6
function findLongestWord(a){
    let x = a[0];
    for(let i = 1; i < a.length; i++){
        if(x.length < a[i].length){
            x = a[i];
        }
    }
    return x;
}


//Question no 7
function filterLongWords(a, b){
    let x = [];
    let y = 0;
    for(let i=0; i<a.length; i++){
        if(a[i].length>b){
            x[y] = a[i];
        }
    }
    return x;
}

// Question no 8
function computeSumOfSquares(arr){
    let sum = arr.reduce((previous, current) => previous + current ** 2, 0);
    return sum;
}


//Question no 9
function printOddNumbersOnly(array) {
    let odd = array.filter(e => e % 2 != 0);
    return odd;
}

// Question no 10
function computeSumOfSquaresOfEvensOnly(array) {
    let sumOfEven = array.filter(x => x % 2 === 0).reduce((p, c) => p + c ** 2, 0);
    return sumOfEven;
}

// Question no 11
function sum(array){
    return array.reduce((previous, current) => previous + current, 0);
}

function mul(arr){
    return arr.reduce((previous, current) => previous * current, 1);
}

//Question no 12

function seconLargestNumber(arr) { 
    var largest, secondLargest;
    largest = secondLargest = Number.NEGATIVE_INFINITY;
    arr.forEach((x) => {largest = x > largest ? x : largest});
    arr.forEach((x) => { secondLargest = x > secondLargest  && x < largest ? x : secondLargest} );
    return secondLargest;
}

//Question no 13
function printFibo(x,a,b) {
    let arr = [a,b];
    for (let i=2; i<x + 1; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }

    console.log(arr);
}




