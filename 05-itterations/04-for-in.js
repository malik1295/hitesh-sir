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
// for in for arrays
const programming=["js","rb","py","cpp","java"]
for (const key in programming) {
    console.log(key);
}
// this gives indexes only not their values which basically are keys of array
// now for values in these keys
for (const key in programming) {
    console.log(programming[key]);
}
//==>>***maps are not iteratable by this
//check by this
const map=new Map()
// now we set keys and values in map
map.set('pak','Pakistan')
map.set('usa','America')
map.set('uk','England')
// now lets print what is in map
// console.log(map);
//now for in loop on map
//if u do this 
for (const key in map) {
   console.log(key);
}
// nothing happen because maps are not iteratable by this