
//Optimising reduce:

//This time, I used the name accumulator instead of previous.
//This is what you'll usually see in the wild.
//I assign accumulator an initial value, 
//if a user provides one, and default to 0, if not. 

var reduce = function (array, callback, initial) {
    var accumulator = initial || 0;
     
    array.forEach(function (element) {
       accumulator = callback(accumulator, array[i]);
    });
     
    return accumulator;
};