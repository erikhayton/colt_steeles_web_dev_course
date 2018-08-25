// Exercises

// function test(x,y) {
//     return y - x;
// }

// test(10,40);


// function test(x) {
//     return x*2;
//     console.log(x); //these two lines are pointless, because 'return' ends the function
//     return x/2;
// }

// test(40);

// Problem Set

//write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
function isEven(i) {
    return i % 2 === 0;
}

//wirte a function factorial() which takes a single numeric argument and returns the factorial of that number
function factorial(num){
    var result = 1;
    for(var i = 2; i <= num; i++){
        result *= i; 
        // result = result * i; //shorter
    }
    return result;
}


//write function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.
function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return(myString);
}


