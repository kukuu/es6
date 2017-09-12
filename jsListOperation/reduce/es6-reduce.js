// Using arrow functions
var total_time = [1, 2, 3, 4, 5].reduce((previous, current) => previous + current);

//var total_time = [1, 2, 3, 4, 5].reduce((previous, current) => previous + current, 0);  resultt same :15
//var total_time = [1, 2, 3, 4, 5].reduce((previous, current) => previous + current,3); // ressult 18 (15+3)

console.log(total_time);