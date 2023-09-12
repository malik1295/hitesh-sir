const myObject={
    js:"javascript",
    rb:"ruby on rail",
    cpp:"c++",
    swift:"swift by apple"
}
// we see for of loop does not work on objects here we use for in loop which works on objects
//for keys only 
// for (const key in myObject) {
//     console.log(key);
// }
// we get all the keys
/*
js
rb
cpp
swift
*/
// for values at these keys use
// for (const key in myObject) {
//     console.log(myObject[key]);
// }
/*
javascript
ruby on rail
c++
swift by apple
*/
// now to print both we use
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}
/*
js is the shortcut for javascript
rb is the shortcut for ruby on rail
cpp is the shortcut for c++
swift is the shortcut for swift by apple
*/