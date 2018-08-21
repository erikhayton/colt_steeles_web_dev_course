// alert("CONNECTED");


// Version 1
// var answer = prompt("are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("are we there yet?");
// }

// alert ("Yay, we made it!");



// Version 2: Use of indexOf
var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}

alert ("Yay, we made it!");



// conditional
// if(answer === "yes") {
//     alert("YAY, We made it!")
// } else {
//     var answer = prompt("are we there yet?");
// }