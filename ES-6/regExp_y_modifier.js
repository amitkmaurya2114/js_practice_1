/*
The y (Sticky) flag performs a "sticky" search that matches only from the lastIndex property of the RegExp object.

The y flag ensures that subsequent matches start immediately after the previous one, without skipping characters.
*/

let text1 = "abc def ghi";
let pattern1 = /\w+/y;

// Start match from position 4
pattern1.lastIndex = 4;
let result1 = text1.match(pattern1);
console.log(result1)

