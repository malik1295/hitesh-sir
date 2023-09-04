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
// console.log(otherNumber.toPrecision(3));//23.9
/*se if we have number like 1123.7483 but we give precision value 3 this still give three numbers in digits but with exponential notation so be care full while giving the range 
*/ 
const otherNumber1= 1123.7483
// console.log(otherNumber1.toPrecision(3));//1.12e+3
//******************toLocalString********//
/*
this is used when there re lot of zeros in the numbers or u find it difficult to read the numbers then this converts the number in comma notaion i.e in million ,billion system normally  called US standards
*/
const number1=100000000000;
// console.log(number1.toLocaleString());
//100,000,000,000
//*****************maths****************//
// console.log(Math);//object [Math]{}
/*
if u do this in browser console you will find lot of properties related to this math object we see some of these here
*/
//********abs()=>for absolute value*****//
// console.log(Math.abs(-4));//4
//********round()=>for roundoff ********//
// console.log(Math.round(6.8));//7
/*
you see this is noraml roundd of but if we want to control i.e we want to round above or below we can use some other methods as
*/
//************ceil()*************//
// console.log(Math.ceil(4.3));//5
/*
see this rounds to the above integer */
//*********floor()************//
// console.log(Math.floor(6.8));//6
//this rounds to lower integer
//******min() and max()***************//
/*
this is used to find the minimum value in the array similarlay max is used to find maximum value in array
*/
// console.log(Math.min(6,4,8,2,9,7));//2
// console.log(Math.max(6,4,8,2,9,7));//9
//**********random()***********//
// console.log(Math.random());
/*
this gives you any random number between 0 and 1 we need such numbers in situation like games such as dice where u need numbers between 1 and 6 so wee need them in organized way*/
/*
console.log(Math.random()*10);
this give random number between 1 and 10 
*/
// console.log(Math.random()*10);
/*
but what if random() gives 0 then this will not give number between 1 and 10 so to avoid this the above is written with +1 inside as
console.log((Math.random()*10)+1);
this garantees that number will be greater than 1 or at least 1
*/
// console.log((Math.random()*10)+1);
//with Math.floor
// console.log(Math.floor(Math.random()*10)+1);