# Javascript Object Transform

## Installation

```
npm install js-object-transform
```

## Usage

Conversion happens between objects with a configuration object, the keys being the new property name and the value being either the property on the source object to copy the value over from, or a function that allows a value to be computed.  The conversion function takes 4 arguments:

- the source object
- the destination object
- the source key / property name
- the destination key / property name

This allows you to customize the calculated value with all relevant information.  That said, you will optimally only need the first argument, the source object, in most cases.

```
var transform = require('js-object-transform');

var apiData = {
    firstname: 'Joe',
    lastname: 'Smith',
    favorite_color: 'blue',
    birthday: 234424800000
};

var convertConfig = {
    name: function(src, dest, srcKey, destKey) {
        return src.firstname + ' ' + src.lastname;
    },
    age: function(src, dest) {
        return new Date().getFullYear() - new Date(src.birthday).getFullYear();
    },
    favorite_color: 'favorite_color',
    message: function(src) {
        return 'Hello ' + src.firstname;
    }
};

var viewData = {};

viewData = transform(apiData, viewData, convertConfig);
// OR
viewData = transform(apiData, convertConfig);
// OR
transform(apiData, viewData, convertConfig);

console.log(viewData);

/**
  {
    "name": "Joe Smith",
    "age": 38,
    "favorite_color": 'blue',
    "message": "Hello Joe"
  }
*/
```

