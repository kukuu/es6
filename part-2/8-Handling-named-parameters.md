# Handling named parameters 

A common way of naming parameters in JavaScript is via object literals (the so-called options object pattern):

```
selectEntries({ start: 0, end: -1 });
```

Two advantages of this approach are: Code becomes more self-descriptive and it is easier to omit arbitrary parameters.

In ES5, you can implement selectEntries() as follows:

```
function selectEntries(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    ···
}
```

In ES6, you can use destructuring in parameter definitions and the code becomes simpler:

```
function selectEntries({ start=0, end=-1, step=1 }) {
    ···
}
```


## Making the parameter optional 

To make the parameter options optional in ES5, you’d add line A to the code:

```
function selectEntries(options) {
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    ···
}
```

In ES6 you can specify {} as a parameter default value:

```
function selectEntries({ start=0, end=-1, step=1 } = {}) {
    ···
}
```
