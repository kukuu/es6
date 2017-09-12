# From concatenating strings to template literals 

With ES6, JavaScript finally gets literals for string interpolation and multi-line strings.

## 3.1 String interpolation 

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

## 3.2 Multi-line strings 

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

```

If you escape the newlines via backslashes, things look a bit nicer (but you still have to explicitly add newlines):

```
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
```


ES6 template literals can span multiple lines:

```
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