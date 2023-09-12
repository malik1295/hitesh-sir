// higher order array loops specially designed for arrays 

// ******for of loop
// no condition needed
// no increment 
// it check by itself where to end and whem to end 
// only declare variable and then specify of which this variable is 
//  const arr=[1,2,3,4,5]
//  for (const num of arr) {
//     console.log(num);
//  }
// this vill print the values of arr at each index 
// see this is way more simple than for loop and while do while loop 

//for of on sring
// const greetings="HELLO WORLD!"
// for (const elements of greetings) {
//    console.log(elements);
// }
// this will print the characters of greetins 
//********for of on Maps ******
// the Map object holds key value pairs and remember the orignal insertion order of keys
// the keys are unigue you cannot give again same key value

// maps are datatypes a little similar to arrays
const map=new Map()
// now we set keys and values in map
map.set('pak','Pakistan')
map.set('usa','America')
map.set('uk','England')
// now lets print what is in map
// console.log(map);
/*
//output is
Map(3) { 'pak' => 'Pakistan', 'usa' => 'America', 'uk' => 'England' }
*/
//now for of loop on map
//if u do this 
// for (const key of map) {
//    console.log(key);
// }
/*
the output will be this 
an array of each key value pair
[ 'pak', 'Pakistan' ]
[ 'usa', 'America' ]
[ 'uk', 'England' ]
but we dont want it like this
we want separate keys and values for this see
*/
// for (const [key, value] of map) {
//    console.log(key ,':-' ,value);
// }
/*
now output will be
pak :- Pakistan
usa :- America
uk :- England
*/
// for of loop on object
const myObj={
   'game1':"NFS",
   'game2':"candycrush"
}
// see if we can loop it like the map 
for (const [key, value] of myObj) {
       console.log(key ,':-' ,value);
    }
    // TypeError: myObj is not iterable
    //menas objects are not itteratable like this