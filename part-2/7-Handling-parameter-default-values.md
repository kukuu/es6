# Handling parameter default values #

In ES5, you specify default values for parameters like this:

```
function foo(x, y) {
    x = x || 0;
    y = y || 0;
    ···
}
```


ES6 has nicer syntax:

```
function foo(x=0, y=0) {
    ···
}

```

An added benefit is that in ES6, a parameter default value is only triggered by undefined, while it is triggered by any falsy value in the previous ES5 code.