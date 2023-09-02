//these comparisons have no problem
/*
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)
*/
// console.log("2">1)//true
// console.log("02">1)//true
/*see the result even though the 2 is a string but java script some how convert this into numberand compare it
but in typescript this is not allowed to compare two different datatypes
*/
// to avoid this we can use === a kind of strict check
/*
this(===) also check data types so now 
 */
// console.log("2"==2)//true
// console.log("2"===2)//false
//see for null
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
/*
surprise from result?
the reason behind is that equality == and comparison(> ,< ,>= ,<= ) works differently
comparison convert null to a number treating it as zero 0
thts why null>=0 is true and null>0 is false
*/