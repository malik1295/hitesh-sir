// for loop 
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}
// this will print numbers from 0 to 9 
// you can use some condition also see
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// again same output butt at 5 first condition run and then 5 and than so on 
// loop inside loop
// for (let i = 0; i <=10; i++) {
//     console.log(`Oter loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//     console.log(`Inner loop value:${j} and outer loop number ${i}`);
//     }
    
// } 
// we can make multilication table from this as 
// for (let i = 1; i <=10; i++) {
//     console.log(`Table of : ${i}`);
//     for (let j = 1; j <=10; j++) {
//    console.log(`${i} X ${j} = ` +i*j);
//     }
    
// } 
// for loop on array
const myArray=["flash","supperman","batmann"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
/*
flash
supperman
batmann
*/
// break and continue
// run loop from 1 to 20
/*
 but  to stop it when 5 comes we need to write if condition and use break keyword now the program run from 1 to 4 and at 5 if block run and it jump directly out of for loop after this 
 */
// for (let i = 1; i <=20; i++) {
//     if (i==5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is: ${i}`);
    
// }
/*
value of i is: 1
value of i is: 2
value of i is: 3
value of i is: 4
Detected 5
*/
// continue
// now in this case when 5 comes if run  and then continue say is bar jane do then this will not print in for console and then the loop runs for remaining numbers
for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is: ${i}`);
    
}