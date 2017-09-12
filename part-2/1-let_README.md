
# From var to const/let 

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
func(false); // undefined

```

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
func(false); // 3

```

That means that you can’t blindly replace var with let or const in existing code; you have to be careful during refactoring.

Advice:

Prefer const. You can use it for all variables whose values never change.

Otherwise, use let – for variables whose values do change.

Avoid var.
