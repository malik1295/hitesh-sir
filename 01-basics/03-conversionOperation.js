// let score=45

//console.log(typeof score);//number
/*but if this is in string and we want to find value of number inside strng then we need to convert this into a number this we can do by
*/
// let score="45"
// let valueInScore=Number(score)
//now Number(score) will convert string score into number
// console.log(valueInScore);//45
/*but if the number is "45abc" then its type will be changed to number but it is not a number*/
let score="45abc"
let valueInScore=Number(score)
console.log(typeof valueInScore)//number
console.log(valueInScore)//NaN