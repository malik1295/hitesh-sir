//while loop
/*
the difference between for and while is the initialization of index is outside of loop before the while and increment is inside the braces{} of while 
*/
// let index=0
// while (index<=10) {
//   console.log(`value of index is: ${index}`);
//     index++
// }
// while loop on array
// const myArray=["flash","Malik","spiderman"]
// let i=0
// while (i<myArray.length) {
//     console.log(`Value at index ${i} is  ${myArray[i]}`);
//     i=i+1
// }
// do while loop
/*
the difference in while and do while is that the condition will be checked at the end of execution of code in do . so if somehow the first condition is false then do must be executed so whatever may be the case the loop will run atleast for first time 
*/
// let score=1
// do {
//     console.log(`score is ${score}`);
//     score++
    
// } while (score<=10);

// even if you give 11 the loop will run once and 11 will be printed and then it check the condition which is not true so loop will end BUTTTTT after the execution of do 
let score=11
do {
    console.log(`score is ${score}`);
    score++
    
} while (score<=10);
//==>> score is 11