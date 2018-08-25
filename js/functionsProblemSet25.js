//write arrays by scratch

// 1 printReverse() use a loop to print array in reverse

function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i]);
    }
}

printReverse([3,4,5,6]);


//2 isUniform() use loop to determine if the array is uniform

function isUniform(arr){
    var first = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
        return false;
        }
    }
return true;
}

//3 sumArray() (use loop and variable to store answer) add numbers and return sum

function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

//4 max() find maximum number in array - use loop - use variable to store max loop if current > past max

function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
