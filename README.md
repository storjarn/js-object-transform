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
    age: 23,
    birthday: 234424800000,
};

var convertConfig = {
    name: function(src, dest, srcKey, destKey) {
        return src.firstname + ' ' + src.lastname;
    },
    age: 'age',
    message: function(src) {
	return 'Hello ' + src.firstname;
    }
};

var viewData = transform(apiData, {}, convertConfig);
// OR
var viewData = transform(apiData, convertConfig);

console.log(viewData);

/**
  {
    "name": "Joe Smith",
    "age": 23,
    "message": "Hello Joe Smith"
  }
*/
```

