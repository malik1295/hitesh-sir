//objects are formed by
/*
 ==>singelton
 ==>constructor method
 ====== object.creat
 ==>object literals
 */
// ==>object literals
// const jsUser={
//     name:"Rehman",
//     "full name":"Rehman Malik"
//     age:25,
//     field:"webdev",
//     email:"whymail@dontknow",
//     isLoggedIn:false,
//     lastloginDays:["monday","friday"]
// }

// now how to access an object
//two ways to do this 
// console.log(jsUser.email);
// console.log(jsUser["email"]);
/*
[] will work if keys are given in "" becuase in object keys are by default in strings
also . is not used in this case
for . method "" are not needed
**BUTT there is no way to access "full name" by . method you can only access it by [] method
 */
// console.log(jsUser["full name"]);
// Rehman Malik

//***adding symbol data in keys of object**//

//for this we can define symbol
const mySymb =Symbol("key1");
/* 
we want this symbol as key inside object
now we cannot access it by directly writing
mySymb:"mykey1"
the problem will be this that mySymb is still a string its data type is not symbol so correct way to use it as symbol is 
 [mySymb]:"mykey1"
 now actullay we refer the above defined symbol
*/
//nowe enter it in above object we defined
const jsUser={
    name:"Rehman",
    "full name":"Rehman Malik",
    [mySymb]:"mykey1",
    age:25,
    field:"webdev",
    email:"whymail@dontknow",
    isLoggedIn:false,
    lastloginDays:["monday","friday"]
}
// noe we can acces symbol as
// console.log(jsUser[mySymb]);
// to change value inside object
// jsUser.age=43 
// age will be changed see
// console.log(jsUser);
/*
{
  name: 'Rehman',
  'full name': 'Rehman Malik',
  age: 43,
  field: 'webdev',
  email: 'whymail@dontknow',
  isLoggedIn: false,
  lastloginDays: [ 'monday', 'friday' ],
  [Symbol(key1)]: 'mykey1'
}
*/
//**********Object.freeze()**********//
//we use this  if we want that no one can change the object 
// Object.freeze(jsUser)
// now if we change the age or anything that will not happen see
// jsUser.age=96
// console.log(jsUser);
/*
{
  name: 'Rehman',
  'full name': 'Rehman Malik',
  age: 25,
  field: 'webdev',
  email: 'whymail@dontknow',
  isLoggedIn: false,
  lastloginDays: [ 'monday', 'friday' ],
  [Symbol(key1)]: 'mykey1'
}
==> see the age is still 25
==>  so by changing something after the freeze will not through an error but these changes will not happen
*/
//***adding function in object*****//
jsUser.greetings=function(){
    console.log('Hello Js user');
}
//lets check
// console.log(jsUser.greetings);
// [Function (anonymous)]
/*
function does not execute only its referance comes why this because greetings is a method so you have to aplly it like method so
*/
// console.log(jsUser.greetings());
// Hello Js user
// now it works
//*****lets form another function 
/*
to refer nmae we can use this.name in the string interpolation 
==> this is used to refer the same object means JsUser and to refer its properties  
*/
jsUser.greetingsTwo=function(){
    console.log(`Hello Js user ,${this.name}`);
}
console.log(jsUser.greetingsTwo());
//Hello Js user ,Rehman