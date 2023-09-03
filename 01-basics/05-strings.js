//string concatination
const name="rehman"
const age=27
// console.log(name + age+"profession")
/*
this syntax of concatination is not used so often what we used is back tics method or tempalate string or we say string interpolation
*/ 
//string interpolation(template string)
// console.log(`my name is ${name} my age is ${age} my professon is teaching`)
/* another way to declare a string is by declaring a varible and then usin new String()
this is very usefull way
*/
const myName=new String('Rehman')
/* you will see interesting thing if u run this in browser sonsole 
it gives you string in key value pair as

String {'Rehman'}
0:"R"
1:"e"
2:"h"
3:"m"
4:"a"
5:"n"
length: 6
[[Prototype]]:String
[[PrimitiveValue]]:"Rehman


there are lot of methods in prortype if u open it so we must have to master these mthods as much as possible
*/
//to access keys we can do this
// console.log(myName[0]);//R
//to check length
// console.log(myName.length);//6
// TO CONVERT INTO upper case
// console.log(myName.toUpperCase());//REHMAN
// to find what character is at certain position we use CharAt()
// console.log(myName.charAt(2));//h
//for the position of character use indexOf() as reverse of above method
// console.log(myName.indexOf('h'));//2
// to devide a string into a substring we can use this
// console.log(myName.substring(0,3));//Reh
//note that it does not include the chracter at 3 also negative values canno be passed
//to cut a portion of string we use slice method as 
// console.log(myName.slice(0,4));//Rehm
//again value at 4th index is not include
//we can use negative value in slice also
console.log(myName.slice(-6,4));//Rehm
