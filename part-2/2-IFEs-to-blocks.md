# From IIFEs to blocks 

In ES5, you had to use a pattern called IIFE (Immediately-Invoked Function Expression) if you wanted to restrict the scope of a variable tmp to a block:

```
(function () {  // open IIFE
    var tmp = ···;
    ···
}());  // close IIFE

console.log(tmp); // ReferenceError
```


In ECMAScript 6, you can simply use a block and a let declaration (or a const declaration):

```

{  // open block
    let tmp = ···;
    ···
}  // close block

console.log(tmp); // ReferenceError
```