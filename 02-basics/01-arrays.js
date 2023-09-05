// array
// let myArr=[1,2,3,4,5,true,"rehman"];
// to access array elements
//for example for element at index 5
// console.log(myArr[5]);//true
// declaring array by new method
//in this square brackets are not needed
let newArr=new Array("batman","superman","spiderman","flash");
//*********Array methods****************//
// let myArr=[1,2,3,4,5,true,"rehman"];
//******push()*******//
//this add value to an array at the end
// myArr.push(9);
// console.log(myArr);
// [ 1, 2, 3, 4, 5, true, 'rehman', 9 ]
//***pop()******//
//this remove one element from end
// myArr.pop();
// console.log(myArr);
// [ 1, 2, 3, 4, 5, true ]
//****unshift()******//
//this add element at the start of array
// myArr.unshift(12);
// console.log(myArr);
// [ 12, 1, 2, 3, 4, 5, true, 'rehman' ]
/*
the problem with this method off aray is by adding an element at the start shift all elemnts off array one index forward which may cause the program to take long time if there are large number of values in an array so normallay it is avoided unless the array is small
*/
//******shift()********//
//reverse of unshift ,means it remove one element of array from start
// myArr.shift();
// console.log(myArr);
// [ 2, 3, 4, 5, true, 'rehman' ]

//*******includes()********//
/*
 sometime we can ask question from array that if an element is present in it or not by using includes() method if the element is present it gives true otherwise false
 */
//  console.log(myArr.includes(33));//false
 //******indexOf()******//
 // to check the index of given element
//  console.log(myArr.indexOf(4));//3
 //for element which is not in array it gives -1 which not or no index
//  console.log(myArr.indexOf(23));//-1
//******* .join()**********//
/*
this add all the elements of array into string seperated by the specified operator 
*/
// const newArr1=myArr.join();
// console.log(newArr1);
// console.log(typeof newArr1);//string
// 1,2,3,4,5,true,rehman
//*******slice()*************//
/* 
this returns a copy of section of array
such as myArr.slice(1,4) gives you copy of myArr from index 1 to index 3 i.e 4 in given range of slice is not included  
*/
// let myArr=[1,2,3,4,5,true,"rehman"];
// let mynewArr1=myArr.slice(1,4);
// console.log("orignal",myArr);
// console.log("new",mynewArr1);
// 1st [ 1, 2, 3, 4, 5, true, 'rehman' ]
// 2nd [ 2, 3, 4 ]
//*******splice()************//
let myArr=[1,2,3,4,5,true,"rehman"];
let mynewArr2=myArr.splice(1,4);
console.log("orignal",myArr);
console.log("new",mynewArr2);
// 1st [ 1, true, 'rehman' ]
// 2nd [ 2, 3, 4, 5 ]
/* 
so here comes the diiference between slice and splice 
slice(1,4) does not include last range but but splice(1,4) includes is very ordinarry answer and a wrong one also 
slice makes the coppy of specified section of array and does nott affect the orignal arry where as splice cut the specified portion includig the last range and then the orignl array is left with remaining elements
*/ 