// Using JS forEach loop
 
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
 
tasks.forEach(function (task) {
 
    task_names.push(task.name);
     
});

console.log(task_names);