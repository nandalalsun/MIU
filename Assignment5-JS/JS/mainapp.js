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
function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

//Question no 4 1
function multiply(arr){
    let mul = 1;
    for(let i = 0; i < arr.length; i++){
        mul = mul * arr[i];
    }
    return mul;
}


//Question no 5
function reverse(arr){
    let rev = "";
    for(let i = 0; i < arr.length; i++){
        rev = arr.charAt(i) + rev;
    }
    return rev;
}


//Question no 6
function findLongestWord(arr){
    let x = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(x.length < arr[i].length){
            x = arr[i];
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
function printOddNumbersOnly(arr) {
    let odd = arr.filter(e => e % 2 != 0);
    return odd;
}

// Question no 10
function computeSumOfSquaresOfEvensOnly(arr) {
    let sumOfEven = arr.filter(x => x % 2 === 0).reduce((p, c) => p + c ** 2, 0);
    return sumOfEven;
}

// Question no 11
function sumUsingFunct(arr){
    return arr.reduce((previous, current) => previous + current, 0);
}

function mulUsingFunct(arr){
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


var test_btn = document.getElementById("test-btn");

const questionNo = document.querySelector('#question_option');

questionNo.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});


