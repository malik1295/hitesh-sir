//Dates
let myDate=new Date()
//this is date and time at this instant
// console.log(typeof myDate);//object
// console.log(myDate);
//this gives very difficult resul of date which is difficult to understand
//lets convert this into string
// console.log(myDate.toString());
/*
this is more readable as month and days are clear in it 
*/
//there are other methods
// console.log(myDate.toDateString());
//******Mon Sep 04 2023
// console.log(myDate.toISOString());
//******2023-09-04T11:26:41.597Z
//console.log(myDate.toLocaleDateString());
//*****9/4/2023
// console.log(myDate.toLocaleTimeString());
//******11:30:10 AM
// console.log(myDate.toLocaleString());
//*****9/4/2023, 11:31:18 AM
// console.log(myDate.toJSON());
//*****2023-09-04T11:32:53.033Z 

//****to declare specific date*****//
// let myCreatedDate=new Date (2023,8,4);
// console.log(myCreatedDate);
//2023-09-04T00:00:00.000Z
//note months are given number starting from 0 such as 8 for september
// to read it more easily we use 
// console.log(myCreatedDate.toDateString());
//Mon Sep 04 2023
// for datewith time we can give more values as 
// let myCreatedDate=new Date (2023,8,4,11,51);
// console.log(myCreatedDate.toLocaleString());
//   9/4/2023, 11:51:00 AM
// we can declare date in more specific formate as yymmdd etc
// in mmddyy format
let myCreatedDate=new Date ("09-04-2023");
// console.log(myCreatedDate.toLocaleString());
//   9/4/2023, 12:00:00 AM
//**********timeStamps***********//
/*
this is useful when we design quizes and we need to know who has given the answer at the very first or fastest and we do by finding the exact time stamp
*/  
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
//this gives time in miliseconds from 1970 to now 
//1693854663421
// to convert it into seconds we can do some math as 
// console.log(Math.floor(Date.now()/1000));
//***some other methods on date******//
let newDate = new Date()
console.log(newDate);
// 2023-09-04T19:25:06.924Z
console.log(newDate.getMonth() + 1);//9
// 9 means september
console.log(newDate.getDay());//1
// 1 means monday
//some times in projects we do this 
// `${newDate.getDay()} and the time `
/*
another method that we can apply using local strin is
*/
// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })