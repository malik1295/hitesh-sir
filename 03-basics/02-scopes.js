//****** study of scope ====> {}
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
// if(true){
//     let a=10
//     const b=4
//     var c=24
// }
// now the scope of these variables id from this { to this }
// means execution of these should not come out of {}
//now see the errors we come accross by printing these

// console.log(a);
//==> this gives error that a is not defined which is good thing we did not define a out of {} so i commint this out
// console.log(b);
//==> also this gives error that b is not defined which is again good thing we did not define b out of {} so this shoud not be accessed outside of {} so i commint this out
// console.log(c);
// 24 
// nooooo this must not happen because we did not defined c outside of {} so this shuld not be accessed from outside 
// this is the problem with var 
//==> var has global scope so it will be accessed from anywhere even if it is defined inside {}
/*
 suppose someone declare var c= 45 before the if statement in the above example then the console will print c=24 that we declared inside if block means we have overwritten the value of c 
 ==> also if there are many programers who are writing the code then we will be confused who has written c=24  because we are writing c=45 so to avoid this problem coders use let and const in programming
 */ 
// now lets check if we write let a outside 
// you will see that outer a is completly independent of inner a . we cann access outer a ouside of {} and inner a inside the block of {}  see below
// let a=300
// if(true){
//     let a=10
//     const b=4
//     console.log("inner a:",a);
// }
// console.log("outer a :",a);
/*
inner a: 10
outer a : 300
*/
///******==>nested scope or scope in scope <==*******//
//closure: iner function can access outer function

// function one(){
//     const username="Malik"
//     function two(){
//         const website="you-tube"
//         console.log(username);
//     }
    // console.log(website);

    // two();
// }
// one();
// why console.log(username); because we want to see can we access username from function two because it is outside of two
// why console.log(website); because we want to see can we access website which is defined in two outside of two 
// now if we execute two outside of two and one outside of one 
/*
====> first we get error 
ReferenceError: website is not defined
=> and this is very right because website is not defined in one so we cannot access it outside of one  so bassically what happend is two() was never executed because error appeared in console.log(website); so we commint this out  and again run now the two() will execute  and we have  
// ===> Malik
=> this means we are able to access the username from inside the function two  although it is defined outside the block of two SURPRISING?
===> this is like k ek bcha icecream le skta h ya cheen skta h elder se but elder ye kam ni kre ga kbi  bhi
==> so the inner scope can access the values ouside of its scope but outer scope cannot access the values fron the inner scope WHEN THERE IS A SCOPE IN SCOPE SITUATION

*/
// we can do these things in if else also

if(true){
    const username="ziafat"
    if(username==="ziafat"){
        const website=" youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// now run and see 
/*
==> first the error comes
ReferenceError: website is not defined
=>this is good because we are accessing the website outside its scope so we need to commint this and run again
==>again error comes
ReferenceError: username is not defined
same error we are accessing the username outside its scope so commint this and run again
==> ziafat youtube
*/
//**** another concept*******//
// we define two functions by two ways 
//this is sipmle function
console.log(addOne(5));
function addOne(num){
    return num+1
}
/*
in this case we can execute the function even above the function body as you can see 
*/

//this time function is stored in some variable this variable is sometime called expression here addTwo is expression of function
console.log(addTwo(5));
const addTwo= function(num){
    return num+2
}
/*
but in this case there will be error  as 
ReferenceError: Cannot access 'addTwo' before initialization
so here we cannot execute function above the body of function 
==>>this will be more clear when we study HOISTING concept 
*/
