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
function addTwoNum(number1,number2){
console.log(number1+number2);
}
addTwoNum(9,8);
// 17
/*
 BUTT if someone give arguments in string form then javascript by itself assume that other number is also string so it will combine them as a string see
*/
addTwoNum(3,"5");
// 35 ==> which is string
addTwoNum(3,"a")
// 3a ==> again behave as 3 is also string
/*
in later we discuss how to avoid this by adding a check inside the function by using if statement so to check that if the datatype of arguments are that what we required
*/