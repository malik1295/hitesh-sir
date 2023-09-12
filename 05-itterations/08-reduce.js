//*********reduce method********//
/*
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
==>>initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value
*/
//this method will be used in shopping cart when you play with these applications 
const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(accum,currval){
//     console.log(`accumulator:${accum} and currentvalue:${currval}`);
//     return accum+currval
// },0)
// 0 at the end of function{}, is because accumulator accum dont where to start with so this is its initial value
// console.log(myTotal);
/*
accumulator:0 and currentvalue:1
accumulator:1 and currentvalue:2
accumulator:3 and currentvalue:3
6
*/
//******using arraow function
const myTotal=myNums.reduce((accum,currval)=>accum+currval
,0)
console.log(myTotal);
// 6
//Example
// from a shopping cart summ all the prices to be paid 
const shoppingCart=[
    {
        itemName:'js course',
        price:6999
    },
    {
        itemName:'py course',
        price:3999
    },
    {
        itemName:'ruby course',
        price:1999
    },
    {
        itemName:'mobile dev course',
        price:8999
    },
]
//to add all prices we are going to use reduce method you can use many methods
const priceToPay=shoppingCart.reduce((accum,item)=>accum+item.price,0)
console.log(priceToPay);
//==>>21996