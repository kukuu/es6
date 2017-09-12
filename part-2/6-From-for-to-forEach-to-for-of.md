# From for to forEach() to for-of 

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
