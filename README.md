# Javascript Object Transform

## Installation

```
npm install js-object-transform
```

## Usage

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

