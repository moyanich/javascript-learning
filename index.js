
/*
Using FOREACH
*/

var list = ["mug", "cat", "school"];

list.forEach(function (currentItem, i) {
   console.log(i, currentItem);
});


/** Reverses the Array */

list.reverse().forEach(function (currentItem, i) {
   console.log(i, currentItem);
});