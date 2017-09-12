//The three big gotchas with reduce are:
//Forgetting to return
//Forgetting an initial value
//Expecting an array when reduce returns a single value

var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduce( function (previous, current) {
        return previous.concat(current);
});
 
console.log(concatenated); // [1, 2, 3, 4, 5, 6];