// for loops problem set

//1 print all numbers between -10 and 19
//for
for(var i = -10; i < 20; i++){
    console.log(i);

}

//while
// var counter = -10;
// while(counter < 20) {
//     console.log(counter);
//     counter++;
// }

//2 print all even numbers between 10 and 40
//for
// for(var i = 10; i <= 40; i += 2){
//     console.log(i);
// }

//for-2
for(var i = 10; i <= 40; i += 1){
    if(i % 2 === 0) {
    console.log(i);
    }
}

// while
// var counter = 10;
// while(counter <= 40) {
//     console.log (counter);
//     counter+=2;
// }

// Always print out even number, no matter where you start!
// var counter = 10;
// while(counter <= 40) {
//     if(counter % 2 === 0){
//     console.log (counter);
// }
//     counter+=1;
// }

//3print all odd numbers between 300 and 333

//for
for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// //while
// var counter = 300;
// while(counter <= 333) {
//     if(counter % 2 !== 0){
//     console.log (counter);
// }
//     counter+=1;
// }


//4print all numbers divisible by 5 and 3 between 5 and 50
//for
for(var i = 5; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}


//while
// var counter = 5;
// while(counter <= 50) {
//     if(counter % 5 === 0 && counter % 3 === 0){
//     console.log (counter);
// }
//     counter+=1;
// }

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

