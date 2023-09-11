/*
===>> falsy values<<===
==> false,0,-0,0n,"",null,undefined,NaN
===>>truthy values<<===
==>>"0",'false'," ",[],{},function(){}
*/
//****to check empty array*****//
//empty array means no values in it s 0 length
const userEmail=[]
if(userEmail.length==0){
    console.log("the string is empty");
}
// ==>> the string is empty
//****to check empty object*****//
//empty object has no keys 
//Object.keys() return keys  in the array form
// the length of this array will be zero for empty object see
const myobject={}
if (Object.keys(myobject).length==0) {
    console.log("the object is empty");
}
//==>> the object is empty

// Nullish Coalescing Operator (??)
//for this see only null and undefined
/*
sometime we dont get direct response from database so you may get no response means undefined or null respone 
in that case the whole codestructure may disturbed. For such cases this operator is used 
it takes first value other than null and undefined if i comes from databse
*/
let val1;
// val1=5 ?? 10
// console.log(val1);
//==>> 5
// val1=null ?? 10
// console.log(val1);
//==> 10
// val1=undefined ?? 15
// console.log(val1);
//==>> 15
val1=undefined ?? 15??34
console.log(val1);
//==>> 15
//*****Terniary Operator******//
// condition ? true:false
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("price is less than 80") :console.log("price is more than 80 ");
//==>> price is more than 80