
//Using filter
 //Here we get a list of just the tasks that took me two hours or more to get done. 

//Using forEach, we'd write:


 
var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120,

    'age' : 24
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60,

    'age' : 54
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240,

    'age' : 39
 
  }
 
];

var difficult_tasks = [];//Holding state
 
 //Loop - Mutating across all objects
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});

console.log(difficult_tasks );