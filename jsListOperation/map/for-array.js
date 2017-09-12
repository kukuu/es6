// Durations are in minutes
 
var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240
 
  }
 
];

var task_names = [];
 
for (var i = 0, max = tasks.length; i < max; i += 1) {
 
    task_names.push(tasks[i].name);
 
}

console.log(task_names);