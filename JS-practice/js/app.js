x = 1;

var a = 5;

var b = 10;

var c = function(a, b, c){
    document.write(x);
    document.write(a);
    var f = function(a, b, c){
        b = a;
        document.write(b);
        b = c;
        var x = 5;
    }
    f(a,b,c);
    document.write(b);
    var x = 10;
}

// c(9,9,10);
console.log("Hello");
