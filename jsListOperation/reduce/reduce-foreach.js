/*Just like map and filter, reduce is defined on Array.prototype 
and so available on any array, and you pass a callback as its first argument. 
But it also takes an optional second argument: the value to start
 combining all your array elements into. 

reduce passes your callback four arguments:

The current value
The previous value 
The current index
The array you called reduce on*/

var numbers = [1, 2, 3, 4, 5],
    total = 0;//initialise
     
numbers.forEach(function (number) {
    total += number;
});
console.log(total)