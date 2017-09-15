1. From var to const/let 

In ES5, you declare variables via var. Such variables are function-scoped, their scopes are the innermost enclosing functions. The behavior of var is occasionally confusing. This is an example:

```
var x = 3;
function func(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
func(false); // undefined
That func() returns undefined may be surprising. You can see why if you rewrite the code so that it more closely reflects what is actually going on:

var x = 3;
function func(randomize) {
    var x;
    if (randomize) {
        x = Math.random();
        return x;
    }
    return x;
}
func(false);  

```
result: undefined

In ES6, you can additionally declare variables via let and const. Such variables are block-scoped, their scopes are the innermost enclosing blocks. let is roughly a block-scoped version of var. const works like let, but creates variables whose values can’t be changed.

let and const behave more strictly and throw more exceptions (e.g. when you access their variables inside their scope before they are declared). Block-scoping helps with keeping the effects of code fragments more local (see the next section for a demonstration). And it’s more mainstream than function-scoping, which eases moving between JavaScript and other programming languages.

If you replace var with let in the initial version, you get different behavior:

```
let x = 3;
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
func(false); 

```

```
result: 3

That means that you can’t blindly replace var with let or const in existing code; you have to be careful during refactoring.

Use "const" for all variables whose values never change.
Otherwise, use "let" – for variables whose values do change.
Avoid var.



2. From IIFEs to blocks 

In ES5, you had to use a pattern called IIFE (Immediately-Invoked Function Expression) if you wanted to restrict the scope of a variable tmp to a block:

```

(function () {  
    var tmp = ···;
    ···
}()); 

console.log(tmp); 

```



In ECMAScript 6, you can simply use a block and a let declaration (or a const declaration):

```
{ 
    let tmp = ···;
    ···
}  
,,,

console.log(tmp); 


3. From concatenating strings to template literals 

With ES6, JavaScript finally gets literals for string interpolation and multi-line strings.


4. String interpolation 

In ES5, you put values into strings by concatenating those values and string fragments:


```
function printCoord(x, y) {
    console.log('('+x+', '+y+')');
}
In ES6 you can use string interpolation via template literals:

function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}
```

5. Multi-line strings 

Template literals also help with representing multi-line strings.

For example, this is what you have to do to represent one in ES5:

```
var HTML5_SKELETON =
    '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '</body>\n' +
    '</html>\n';
If you escape the newlines via backslashes, things look a bit nicer (but you still have to explicitly add newlines):

var HTML5_SKELETON = '\
    <!doctype html>\n\
    <html>\n\
    <head>\n\
        <meta charset="UTF-8">\n\
        <title></title>\n\
    </head>\n\
    <body>\n\
    </body>\n\
    </html>';
ES6 template literals can span multiple lines:

const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

```
(The examples differ in how much whitespace is included, but that doesn’t matter in this case.)

More information: chapter “Template literals and tagged templates”.


6. From function expressions to arrow functions 

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

In ES6, you can use arrow functions, which don’t shadow this (line A):

```
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
When defining parameters, you can even omit parentheses if the parameters are just a single identifier. Thus: (x) => x * x and x => x * x are both allowed.

More information: chapter “Arrow functions”.


7. Handling multiple return values 

Some functions or methods return multiple values via arrays or objects. In ES5, you always need to create intermediate variables if you want to access those values. In ES6, you can avoid intermediate variables via destructuring.


8. Multiple return values via arrays 

exec() returns captured groups via an Array-like object. In ES5, you need an intermediate variable (matchObj in the example below), even if you are only interested in the groups:

```
var matchObj =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];

```

In ES6, destructuring makes this code simpler:

```
const [, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');

``

The empty slot at the beginning of the Array pattern skips the Array element at index zero.

9. Multiple return values via objects 

The method Object.getOwnPropertyDescriptor() returns a property descriptor, an object that holds multiple values in its properties.

In ES5, even if you are only interested in the properties of an object, you still need an intermediate variable (propDesc in the example below):


```
var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); 

```

// true true

In ES6, you can use destructuring:

```
const obj = { foo: 123 };

const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); 

```
// true true

```
{writable, configurable}
```

 is an abbreviation for:

```
{ writable: writable, configurable: configurable }

,,,




10. From for to forEach() to for-of 

Prior to ES5, you iterated over Arrays as follows:

```
var arr = ['a', 'b', 'c'];
for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
}

```

In ES5, you have the option of using the Array method forEach():

```
arr.forEach(function (elem) {
    console.log(elem);
});

```

A for loop has the advantage that you can break from it, forEach() has the advantage of conciseness.

In ES6, the for-of loop combines both advantages:

```
const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
}

```

If you want both index and value of each array element, for-of has got you covered, too, via the new Array method entries() and destructuring:

```
for (const [index, elem] of arr.entries()) {
    console.log(index+'. '+elem);
}

```


11.  Handling parameter default values 

In ES5, you specify default values for parameters like this:

```
function foo(x, y) {
    x = x || 0;
    y = y || 0;
    ···
}

ES6 has nicer syntax:

```
function foo(x=0, y=0) {
    ···
}

```

An added benefit is that in ES6, a parameter default value is only triggered by undefined, while it is triggered by any falsy value in the previous ES5 code.

More information: section “Parameter default values”.

12. Handling named parameters 

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

13. Making the parameter optional 

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


14.  From arguments to rest parameters 

In ES5, if you want a function (or method) to accept an arbitrary number of arguments, you must use the special variable arguments:

```
function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

```

In ES6, you can declare a rest parameter (args in the example below) via the ... operator:

````
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

function format(pattern) {
    var args = [].slice.call(arguments, 1);
    ···
}
Rest parameters make code easier to read: You can tell that a function has a variable number of parameters just by looking at its parameter definitions.


15. From apply() to the spread operator (...) 

In ES5, you turn arrays into parameters via apply(). ES6 has the spread operator for this purpose.

 Math.max() 

Math.max() returns the numerically greatest of its arguments. It works for an arbitrary number of arguments, but not for Arrays.

ES5 – apply():

```
> Math.max.apply(Math, [-1, 5, 11, 3])
11

```

ES6 – spread operator:

```
> Math.max(...[-1, 5, 11, 3])
11

```

16. Array.prototype.push() 

Array.prototype.push() appends all of its arguments as elements to its receiver. There is no method that destructively appends an Array to another one.

ES5 – apply():

```
var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
```

// arr1 is now ['a', 'b', 'c', 'd']

ES6 – spread operator:

```
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);

```

// arr1 is now ['a', 'b', 'c', 'd']


17.From concat() to the spread operator (...) 

The spread operator can also (non-destructively) turn the contents of its operand into Array elements. That means that it becomes an alternative to the Array method concat().

ES5 – concat():

```
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));

```

    // [ 'a', 'b', 'c', 'd', 'e' ]

ES6 – spread operator:


```
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log([...arr1, ...arr2, ...arr3]);

arr1.push(...arr2, ...arr3)
    // [ 'a', 'b', 'c', 'd', 'e' ]


18. From function expressions in object literals to method definitions 

In JavaScript, methods are properties whose values are functions.

In ES5 object literals, methods are created like other properties. The property values are provided via function expressions.

```
var obj = {
    foo: function () {
        ···
    },
    bar: function () {
        this.foo();
    }, // trailing comma is legal in ES5
}
```

ES6 has method definitions, special syntax for creating methods:

```
const obj = {
    foo() {
        ···
    },
    bar() {
        this.foo();
    },
}

```



19. From constructors to classes 

ES6 classes are mostly just more convenient syntax for constructor functions.


Base classes 

In ES5, you implement constructor functions directly:

``
function Person(name) {
    this.name = name;
}
Person.prototype.describe = function () {
    return 'Person called '+this.name;
};

```
In ES6, classes provide slightly more convenient syntax for constructor functions. Scalable, and more efficiently managed:

```
class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called '+this.name;
    }
}

```

Note the compact syntax for method definitions – no keyword function needed. Also note that there are no commas between the parts of a class.


Derived classes 

Subclassing is complicated in ES5, especially referring to super-constructors and super-properties. This is the canonical way of creating a sub-constructor Employee of Person:

 Person.call(this, name); // super(name)

```
function Employee(name, title) {
    Person.call(this, name); 
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
    return Person.prototype.describe.call(this) // super.describe()
           + ' (' + this.title + ')';
};

```
ES6 has built-in support for subclassing, via the extends clause:

```
class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}

```

