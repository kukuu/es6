//Author: Alexander Adu-Sarkodie
//Application name: TaskMaster
//Date: January 2017

//1. Collect two days' worth of tasks.
//2. Convert the task durations to hours, instead of minutes.
//3. Filter out everything that took two hours or more.
//4. Sum it all up.
//5. Multiply the result by a per-hour rate for billing.
//6. Output a formatted dollar amount.

var monday = [
        {
            'name'     : 'Write a tutorial',
            'duration' : 480
        },
        {
            'name'     : 'Development in AngularJS',
            'duration' : 120
        }
];
 
var tuesday = [
        {
            'name'     : 'Development in REACT',
            'duration' : 240
        },
        {
            'name'     : 'SDevelopment in Angular2',
            'duration' : 180
        },
        {
            'name'     : 'Development in REDUX',
            'duration'  : 240
        }
];

var wednessday = [
        {
            'name'     : 'Development in Native JavaScript',
            'duration' : 240
        },
        {
            'name'     : 'Development in UX',
            'duration' : 180
        },
        {
            'name'     : 'Development in Angular2',
            'duration'  : 240
        }
];

var thursday = [
        {
            'name'     : 'Development in REACT',
            'duration' : 240
        },
        {
            'name'     : 'DDevelopment in AngularJS',
            'duration' : 180
        },
        {
            'name'     : 'REDUX',
            'duration'  : 240
        }
];

var friday = [
        {
            'name'     : 'Development in Angular2',
            'duration' : 240
        },
        {
            'name'     : 'Development in Angular2',
            'duration' : 180
        },
        {
            'name'     : 'Development in REACT',
            'duration'  : 240
        }
];
 
//Aggregator    
var tasks = [monday, tuesday,wednessday,thursday,friday];



//Chaining
var result = tasks.reduce(function (accumulator, current) {
		//return an array reducing/merging all  arrays into a single array
        return accumulator.concat(current);
        //perform time  (same operation) transition (convert to hours) on all members of the new array using map and return a new array list to chain
    }).map(function (task) {
        return (task.duration / 60);
        //filter based on condition 
    }).filter(function (duration) {
        return duration >= 2;
        //obtain a new array and use map to perform operation on all the elemnt of the array i.e multiply by say 25
    }).map(function (duration) {
        return duration * 50;
        //reduce to find the total of the list items of the operation
    }).reduce(function (accumulator, current) {
        return [(+accumulator) + (+current)];//reverse casting as string
        //coerce into dollar with decimal places
    }).map(function (dollar_amount) {
        return '£' + dollar_amount.toFixed(2);
        //store/assign and push
    }).reduce(function (formatted_dollar_amount) {
        return formatted_dollar_amount;
});

console.log(result);
