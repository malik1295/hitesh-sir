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
console.log(anotherArrayFull);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/