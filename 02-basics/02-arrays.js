const heros1=["batman","superman","spiderman","flash"];
const heros2=["umar","farooq","usman"];
//combining these string 
// by pushing
// heros1.push(heros2)
// console.log(heros1);
/*
['batman','superman','spiderman','flash',[ 'umar', 'farooq', 'usman' ]
not what wee want at this stage
we dont want 2nd array inside the first as an element here it becomes element at 4th index
  */
 // by concat method
 // returns a new array combinig with the other array
// const allHeros=heros1.concat(heros2);
// console.log(allHeros);
/*
['batman','superman','spiderman','flash','umar','farooq','usman']
this is what we want 
*/
//*****spread operator ...[] **********//
/*
this is mostly used instead of concat method it spread the array inside the other array also in concat you can use one array but here we can use more than one arrays simply by doing ,...[],...[],
*/
// const allNewHeros=[...heros1,...heros2];
// console.log(allNewHeros);
/*
['batman','superman','spiderman','flash','umar','farooq','usman']
*/
//***********flat***********//
/*
this returns a new array with all sub array elements concatinated to it recursively upto the specified depth if depth is not known use Infinity
*/
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const anotherArrayFull= anotherArray.flat(Infinity);
// console.log(anotherArrayFull);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/
// use of**Array.from ** to form array from string 
// first check about string 
console.log(Array.isArray("Rehman"));
//false
//means not an array
// console.log(Array.from("Rehman"));
// [ 'R', 'e', 'h', 'm', 'a', 'n' ]
// if you give an object it will be interesting see
console.log(Array.from({name:"Rehman"}));
// []
// this is empty string
/*
so for object it will be important to tell that which thing is to be converted into string the keys or the values
*/
//*****Array.of*********//
/*
this returns a new array from set of elements  the set of elements may be variables,arays 
*/
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
// [ 100, 200, 300 ]