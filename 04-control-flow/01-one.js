/*
   *****Importance of Control Flow******
 the need of the control flow is that we dont want to run thw whole code everytime we want that some piece of code run for some condition and for some other condition this code should not run and this time another piece of code should run thats why we are interseted in control flow
*/
/*
  ******comparison operators******
===>>>  == for equality check
===>>>   >,<,  for less or greater
===>>>  >=,<= for greater and equal and less and equal
===>>>  === strict equality check, this is used in equality check when datatype is also to be checked
===>>>  != not equal operator
===>>>  !== strictly not equal operator
===>>>  && AND operator
===>>>   || OR operator
*/
//******* about if statement************//
//==>> syntax: if(condition){}
// now the code inside {} will run if the condition inside() is true otherwise the code will never enter in{}
// anything outside of if block will be executed this has nothing to do with if block

//****Exaample ===>>> if ******
// let temperature=43
// if (temperature<50) {
//     console.log("the temperature is less than the limit");
// }
// console.log("i am outside of if statement so i will be executed what so ever");
//==>> the temperature is less than the limit
//==>> i am outside of if statement so i will be executed what so ever
//******EXAMPLE ===>> if else**********
// if we want that if the condition is true if block run but if condition is false some other code run than see

// let temperature=63
// if (temperature<50) {
//     console.log("the temperature is less than the limit");
// }else {
//     console.log("the temperatuere is greater than the limit");
// }
//==>> the temperatuere is greater than the limit

// EXAMPLE*** if and scope related
// const score=200
// if (score>100) {
//     const power="fly"
//     console.log(`user power, ${power}`);
// }
// ==>> user power, fly
// the problem will be then if you want to console it outside of if block see
// console.log(`user power, ${power}`);
//==>> ReferenceError: power is not defined
/*
 and this should happen because power is defined inside the if block so its scope is there onlu we cannot access it outside of its scope  
 */
// BUTTT  by using var instead of const see
// const score=200
// if (score>100) {
//     var power="fly"
//     console.log(`user power, ${power}`);
// }
// console.log(`user power, ${power}`);
//==>> user power, fly
//==>> user power, fly
/*
now both are executed this is because var has totally global scope so it can be accessed outside of its declaration block but const has block scope 
that is the problem with var because it leaks out of block thats why we use let and const 
*/
//****short hand notation of if******//
//{} are not used so what is the scope?
//here scope is iplicit  
// but avoid to use it because readability of this method is very poor so it is not considered good practice 

const balance =1000
if(balance>500) console.log("test");
//==>> test
// to add more console use comma , and end with ; necessary
if(balance>500) console.log("test"),console.log("good");
//==>> test
//==>> good