# From function expressions to arrow functions 

In current ES5 code, you have to be careful with this whenever you are using function expressions. In the following example, I create the helper variable _this (line A) so that the this of UiComponent can be accessed in line B.

```

function UiComponent() {
    var _this = this; // (A)
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        console.log('CLICK');
        _this.handleClick(); // (B)
    });
}
UiComponent.prototype.handleClick = function () {
    ···
};

```

```
In ES6, you can use arrow functions, which don’t shadow this (line A):

function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // (A)
    });
}

```

(In ES6, you also have the option of using a class instead of a constructor function. That is explored later.)

Arrow functions are especially handy for short callbacks that only return results of expressions.

In ES5, such callbacks are relatively verbose:


```
var arr = [1, 2, 3];
var squares = arr.map(function (x) { return x * x });
```

In ES6, arrow functions are much more concise:

```
const arr = [1, 2, 3];
const squares = arr.map(x => x * x);

```

When defining parameters, you can even omit parentheses if the parameters are just a single identifier. Thus:

```
 (x) => x * x ;

```

 and 

 ```
 x => x * x 

 ```

 are both allowed.