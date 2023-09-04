const score=400;
//here javascript will automatically detect that its type is numberbur some time w have to specify first 
//in type script it is mendatory to specify type
//****************using new keyword*******//
const balance=new Number(230);
/*here it is garented that type is number
 and it will be visible if u see also notethe difference between the two outputs
 so defining in new object is good to see the clear difference
 */
// console.log(balance);//[Number:230]
// console.log(score);// 400
//*****toString() method*****************//
// console.log(balance.toString());//230
/*
but here type of 230 is string we can now check on it the properties of string such as length property
*/
// console.log(balance.toString().length);//3

//********************toFixed()************//
/*
this is used when we want to fix the number of decimal places after a number
this is usefull in e-comerce applications where precision value become very large so there we need this 
*/
// console.log(balance.toFixed(2));//230.00

//*********toPrecision()*********************//
/*
this will fix the number of significant digits in the given number 
*the value inside () can be given between 1 and 21
*this return string containing numbers either in exponential or fixed point notation with a specified number of digits 
*/
const otherNumber= 23.8962
console.log(otherNumber.toPrecision(3));//23.9
/*se if we have number like 1123.7483 but we give precision value 3 this still give three numbers in digits but with exponentil notation so be care full while giving the range 
*/ 
const otherNumber1= 1123.7483
// console.log(otherNumber1.toPrecision(3));//1.12e+3
//******************toLocalString********//
/*
this is used when there re lot of zeros in the numbers or u find it difficult to read the numbers then this converts the number in comma notaion i.e in million ,billion system normally  called US standards
*/
const number1=100000000000;
console.log(number1.toLocaleString());
//100,000,000,000