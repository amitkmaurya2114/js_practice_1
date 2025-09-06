/*
The u (unicode) flag enables full Unicode support in the regular expression.

By default, JavaScript and regex treats 4-byte Unicode characters (like emojis or less common symbols) 
as two separate 2-byte "surrogate" code units.

The u flag treats the pattern as a sequence of Unicode code points, which is important for correctly 
handling characters outside the Basic Multilingual Plane (BMP).
*/

let text1 = "Hello 😄";

let pattern1 = /\p{Emoji}/u;
let result1 = pattern1.test(text1);

console.log(result1);




let text2 = "Hello 😄";

let pattern2 = /\p{Emoji}/;
let result2 = pattern2.test(text2);
console.log(result2)
