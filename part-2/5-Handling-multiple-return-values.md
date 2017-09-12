# Handling multiple return values 

Some functions or methods return multiple values via arrays or objects. In ES5, you always need to create intermediate variables if you want to access those values. In ES6, you can avoid intermediate variables via destructuring.

## Multiple return values via arrays 

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
 ```

The empty slot at the beginning of the Array pattern skips the Array element at index zero.


## Multiple return values via objects 

The method Object.getOwnPropertyDescriptor() returns a property descriptor, an object that holds multiple values in its properties.

In ES5, even if you are only interested in the properties of an object, you still need an intermediate variable (propDesc in the example below):

```
var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true

```


In ES6, you can use destructuring:

```
const obj = { foo: 123 };

const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true

```


```

{writable, configurable} is an abbreviation for:

{ writable: writable, configurable: configurable }

```
