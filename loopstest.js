
//while loops problem set

//1 print all numbers between -10 and 19
// var num=-10; - wrong
// while(num>19) {
//     if(num < -11);
//         console.log(num);
// } - wrong

var counter = -10;
while(counter < 20) {
    console.log(counter);
    counter++;
}

//2 print all even numbers between 10 and 40

var counter = 10;
while(counter <= 40) {
    console.log (counter);
    counter+=2;
}

// Always print out even number, no matter where you start!
// var counter = 10;
// while(counter <= 40) {
//     if(counter % 2 === 0){
//     console.log (counter);
// }
//     counter+=1;
// }

//3print all odd numbers between 300 and 333

var counter = 300;
while(counter <= 333) {
    if(counter % 2 !== 0){
    console.log (counter);
}
    counter+=1;
}

//4print all numbers divisible by 5 and 3 between 5 and 50

var counter = 5;
while(counter <= 50) {
    if(counter % 5 === 0 && counter % 3 === 0){
    console.log (counter);
}
    counter+=1;
}

// var count = 1;

// while(count < 10000) {
//     console.log("count is: " + count);
//     count++;
// }


// function getValue () {
//     console.log(1);
//     return 2;
//  };
 
//  for (let  i = 0; i < 10000; i++) {   
//     getValue();
//  }

