//reduceRight does the same thing, but in the opposite direction:

var array_of_arrays = [[1, 2], [3, 4], [5, 6]];
var concatenated = array_of_arrays.reduceRight( function (previous, current) {
        return previous.concat(current);
});
 
console.log(concatenated); // [5, 6, 3, 4, 1, 2];