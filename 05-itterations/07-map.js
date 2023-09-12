//******map method******
/*
Calls a defined callback function on each element of an array, and returns an array that contains the results.
callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
*/
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// suppse we want to add 10 to each of the numbers of array defined above
// const neNums=myNumbers.map((num)=> num+10)
//or
// const neNums=myNumbers.map((num)=>{return num+10})
// both gives same result see
// console.log(neNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/
//==>>>****chaining*****<<<==//
// means u can use  multiple methods like two maps and filter see 
// suppse we want to multiply each number of array by 10 and then want to add 1 in each of newly formed number then we do this 
// const newNums=myNumbers.map((num)=> num*10)
// .map((num)=>num+1)
// console.log(newNums);
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/
// more on this we apply filter to get numbers of specified cindition see
const newNums=myNumbers.map((num)=> num*10)
.map((num)=>num+1)
.filter((num)=> num>=40)
console.log(newNums);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/