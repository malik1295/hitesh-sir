// let score=45

//console.log(typeof score);//number
/*but if this is in string and we want to find value of number inside strng then we need to convert this into a number this we can do by
*/
// let score="45"
// let valueInScore=Number(score)
//now Number(score) will convert string score into number
// console.log(valueInScore);//45
/*but if the number is "45abc" then its type will be changed to number but it is not a number*/
// let score="45abc"
// let valueInScore=Number(score)
// console.log(typeof valueInScore)//number
// console.log(valueInScore)//NaN
/*so its look like string is converted into number but it is not a number as you see
*/
//now see if value of score wass null
/*
let score=null
console.log(typeof score)//object
let valueInScore=Number(score)
console.log(typeof valueInScore)//number
console.log(valueInScore)// 0
*/
//now see if value of score wass undefined
/*
let score=undefined
console.log(typeof score)//undefined
let valueInScore=Number(score)
console.log(typeof valueInScore)//number
console.log(valueInScore)// NaN
*/
//for boolean value
/*
let score=true
console.log(typeof score)//boolean
let valueInScore=Number(score)
console.log(typeof valueInScore)//number
console.log(valueInScore)// 1
*/
//notes
//"33"=>33
//"33abc"=>NaN
//true=>1, false=>0
/*conversion of number into boolean*/
/*
let isLoggedIn=1
console.log(typeof isLoggedIn)//number
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)//boolean
console.log(booleanIsLoggedIn)//true
*/
/* for empty string boolean iis false*/
/*
let isLoggedIn=""
console.log(typeof isLoggedIn)//string
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)//boolean
console.log( booleanIsLoggedIn)//false
*/
/*converting number to string*/
/*
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)// still 33 u see
console.log(typeof stringNumber)// string
*/
//*********operations*************//
let vlaue=3
let negValue=-vlaue
console.log(negValue)//-3
//console.log(2+4)
//console.log(2*4)
//console.log(2**4) shows 2 to the power 4
//console.log(2/4)
//console.log(5%3)//used for remainder 