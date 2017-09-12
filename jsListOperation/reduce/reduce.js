/*While this isn't a bad use case for forEach, 
reduce still has the advantage of allowing us to avoid mutation. With reduce, we would write:*/

var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);

console.log(total);