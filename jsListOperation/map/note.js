/*
# Using map, you don't have to manage the state of the for loop yourself.
# You can operate on the element directly, rather than having to index into the array.
# You don't have to create a new array and push into it. map returns the 
finished product all in one go, so we can simply assign the return value to a new variable.
# You do have to remember to include a return statement in your callback. 
If you don't, you'll get a new array filled with undefined. 

Under the hood, map passes three arguments to your callback:

# The current item in the array
# The array index of the current item
#nThe entire array you called map on 

# forEach returns undefined, so it doesn't chain with other array methods. 
# map returns an array, so you can chain it with other array methods.
map returns an array with the finished product, 
rather than requiring us to mutate an array inside the loop. 

# The callback you pass to map must have an explicit return 
statement, or map will spit out an array full of undefined. 
It's not hard to remember to include a return value, but it's not hard to forget. 

# If you do forget, map won't complain. Instead, 
it'll quietly hand back an array full of nothing. 
Silent errors like that can be surprisingly hard to debug. 
*/
