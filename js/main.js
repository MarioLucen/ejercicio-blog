'use strict';

console.log('hola');
fetch('https://jsonplaceholder.typicode.com/posts/').then(function (response) {
  return response.json();
}).then(function (json) {
  return console.log(json);
});
