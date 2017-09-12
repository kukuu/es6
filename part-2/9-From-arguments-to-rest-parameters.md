# From arguments to rest parameters 

In ES5, if you want a function (or method) to accept an arbitrary number of arguments, you must use the special variable arguments:

```
function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
```

In ES6, you can declare a rest parameter (args in the example below) via the ... operator:

```
function logAllArguments(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
```


Rest parameters are even nicer if you are only interested in trailing parameters:

```
function format(pattern, ...args) {
    ···
}
```

Handling this case in ES5 is clumsy:

```
function format(pattern) {
    var args = [].slice.call(arguments, 1);
    ···
}
```

Rest parameters make code easier to read: You can tell that a function has a variable number of parameters just by looking at its parameter definitions.