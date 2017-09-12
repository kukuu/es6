//Using filter
			 //Here we get a list of just the tasks that took me two hours or more to get done. 

			//Using forEach, we'd write:


			 
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

			var difficult_tasks = [];
			 
			tasks.forEach(function (task) {
			    if (task.duration >= 120) {
			        difficult_tasks.push(task);
			    }
			});

			console.log(difficult_tasks );