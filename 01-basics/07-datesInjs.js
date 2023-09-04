//Dates
let myDate=new Date()
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
console.log(myDate.toJSON());
//*****2023-09-04T11:32:53.033Z 
