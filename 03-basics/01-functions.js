// function without parameters and arguments
// syntax is ==> function name(){}
// to call function ==> name()
// by the functions we can do some task repeatidly by calling function not by writing code again and again (DRY method)
// see simple exapmle if we want the execution of code below many times 
// console.log("R");
// console.log("E");
// console.log("H");
// console.log("M");
// console.log("A");
// console.log("N");
// writing this many times is not good practice instead we write it inside a function and call this function whenever we want as
// function declaration

function myName(){
    console.log("R");
    console.log("E");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("N");
}
//function call or execution
// if u only writw mayName 
// this is the referance only 
// to execute function we have to write

// myName();
 
//*** function for addition of numbers****//
//==>parameters: function name(a,b)
//numbers or string used inside() in the function at the time of declaration are called parameters
// here a and b are called parameters of function
// when we call this function we have to give arguments in it like in example below
//==>Arguments:numbers or strings given to function inside()at the time of call or execution are called arguments
//==>  addTwoNum(4,6)
// se you dont need to set the datatype of parameters or arguments yet
// but this will cause problems as u will see
// function addTwoNum(number1,number2){
// console.log(number1+number2);
// }
// addTwoNum(9,8);
// 17
/*
 BUTT if someone give arguments in string form then javascript by itself assume that other number is also string so it will combine them as a string see
*/
// addTwoNum(3,"5");
// 35 ==> which is string
// addTwoNum(3,"a")
// 3a ==> again behave as 3 is also string
/*
in later we discuss how to avoid this by adding a check inside the function by using if statement so to check that if the datatype of arguments are that what we required
*/
// now if you store the calling function and then want to print willit work? see
// function addTwoNum(number1,number2){
//     console.log(number1+number2);
//     }
   
//  const result= addTwoNum(3,5);
 //8 ==> means its working?
 // see if we want to prin result variable in console becausewe are thinking that 8 is stored in result 
//  console.log("Result:",result); 
 // 8
 //Result: undefined
 /*
  why because becuse still addTwoNum(3,5) is executing but nothing is stored in result so the console is giving undefined this is because console does not mean function is returning value
  */ 
 // so the right way is to return some thing from function in something see

//  function addTwoNum(number1,number2){
//     let sum=number1+number2;
//     return sum
//     }
 
    /* 
    now after return something is actually stored in the result below and we can print this value now so now addTwoNum(3,5) is returning sum to result which in this case is 8 so value of result now is 8
    */
    // const result= addTwoNum(3,5);
    // console.log("Result:",result);
//another way of doing the same this is 
// function addTwoNum(number1,number2){
//         return number1+number2;
//         }
//     const result= addTwoNum(3,5);
//     console.log("Result:",result);
//*****now another interesting thing is
    /* if you write consloe.log("something") inside the function below the return that will never execute but if u write it above return it will execute so function work nothing after return according to rule of function this is unreachable code  see the two cases
    */
   //==>case 1  Code After return 
// function addTwoNum(number1,number2){
//   let sum=number1+number2;
//  return sum
//   console.log("Rehman")
// }
//const result= addTwoNum(3,5);
//console.log("Result:",result);
// Result: 8
 //==> case 2  Code before return
// function addTwoNum(number1,number2){
// let sum=number1+number2;
// console.log("Rehman")
// return sum
            
// }
// const result= addTwoNum(3,5);
// console.log("Result:",result);
// Rehman
// Result: 8

/* 
 we will discuss some other ways to take parameters and arguments
*/
// consider the example

// function loginUserMessage(username){
//     return `${username} just logged in`
// } 
//now to call and print this function
// console.log(loginUserMessage("Rehman"));
//Rehman just logged in
//==> but suppose some one give empty string then see output
// console.log(loginUserMessage(""));
// just logged in
//==> but if some did not pas a value  then see the output
// console.log(loginUserMessage());
// undefined just logged in
/*
==> IMPORTANT: means if you did not pass a value the result would be undefined at username not a null as u can see*/
// **** what to do if someone did not pass value of username******//
//==> we can use an if statement inside the functin see
// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());
/*
Please enter a username
undefined just logged in
*/
// but we dont want second line to execute so what we do ? very simple use return in the if so code will not run further see 
// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());
/*
Please enter a username
undefined
*/ 
/*====>
another way of doing the same thing isby the use of !username this is same as username===undefined 
this code you will see in react or react native
*/
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());
/*
Please enter a username
undefined
*/
/* ==> BUTT if you want to avoid this condtion of not given username you can do that by giving a default value by yourself by doing this the username will never be undefined and the code will not enter in if block if someone not give user name Malik will be usernam by default
*/

function loginUserMessage(username="Malik"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());
//Malik just logged in

//*****rest... operator********//
/*
sometime we dont know how much arguments are going to be entered by user as in case of shopping cart where user by many items and have to eneter that many prices . in this case we use this method by using three dots... before the parameters 
now one will be able to pass many arguments and this perator will bundle them and give them in he form of array  ==> now the time we have an array we will be able to manipulate this array and lop over these values to find some or anything we want 
see eample 
*/
// function calculateCartPrice(...prices){
//     return prices
// }
// console.log(calculateCartPrice(200,400,500));
// [ 200, 400, 500 ]
// now if you give other parameters first and then use rest operator then what happen 
function calculateCartPrice(val1,val2,...prices){
    return prices
}
console.log(calculateCartPrice(200,400,500 ,600,700,450));
// [ 500, 600, 700, 450 ]
// this is because the fist two arguments goes to val1 and val2 and remaining goes into array of prices due to rest operator