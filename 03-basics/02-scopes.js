//****** scope ====> {}
// the story  start with three words
// 1==>let, 2==>const, 3==> var
// let a=10
// const b=4
// var c=24
// it will be very easy to print them see and no problem at all 
// console.log(a);
// console.log(b);
// console.log(c);
//the twist in the tail comes when {} this appear
// {} this is normally we called scope that comes in functions and if else statements NOT in the objects here 
// lets see in if statement
// now wedefine these variables in if block and see what happen
//here true in if means the condition will be true always and we will go inside the if block
if(true){
    let a=10
    const b=4
    var c=24
}
// now the scope of these variables id from this { to this }
// means execution of these should not come out of {}
//now see the errors we come accross by printing these

// console.log(a);
//==> this gives error that a is not defined which is good thing we did not define a out of {} so i commint this out
// console.log(b);
//==> also this gives error that b is not defined which is again good thing we did not define b out of {} so this shoud not be accessed outside of {} so i commint this out
console.log(c);
// 24 
// nooooo this must not happen because we did not defined c outside of {} so this shuld not be accessed from outside 
// this is the problem with var 
//==> var has global scope so it will be accessed from anywhere even if it is defined inside {}
/*
 suppose someone declare var c= 45 before the if statement in the above example then the console will print c=24 that we declared inside if block means we have overwritten the value of c 
 ==> also if there are many programers who are writing the code then we will be confused who has written c=24  because we are writing c=45 so to avoid this problem coders use let and const in programming
 */ 
