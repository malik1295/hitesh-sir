// some loops are directly added in the properties of arrays
const coding=["js","ruby","cpp","python","java"]
// to use methods on this array use coding. you will se most of methods
// forEach() this is call back function which means it require function and it knows all the properties of array by itself
//callback function have no name
// as this run in array so it will take values as parameter and then you can do what you want to do with these values
/*
(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/
// coding.forEach(function(val){
//     console.log(val);
// } )
// this gives the elements in array
//**** using arraow function*****//
// coding.forEach((item)=>{
//     console.log(item);
// } )
// we get same result 
//we can write function and pass it as 
// function printme(item){
//     console.log(item);
// }
// now you pass function but only give its referance means its name only
// coding.forEach(printme)
// again we get same result
// we can access other things of array also by these methd say index or list  see
// coding.forEach((item, index,arr)=>{
//     console.log(item ,index,arr);
// } )
/*
js 0 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
python 3 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
java 4 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
*/
// ******objects in array and for each
const myCodding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCodding.forEach((item)=>{
console.log(item.languageName);
})
/*
javascript
java
python
*/
// how easy this is if u understand loops u can access all the complex things in array very easily
// this is going to be very usefull because tha data comming from database is in this form say a mobile name number price or something like this so you can access these properties in object lying in an array very easily by this method