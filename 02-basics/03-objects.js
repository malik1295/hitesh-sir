//objects are formed by
/*
 ==>singelton
 ==>constructor method
 ====== object.creat
 ==>object literals
 */
// ==>object literals
const jsUser={
    name:"Rehman",
    "full name":"Rehman Malik"
    age:25,
    field:"webdev",
    email:"whymail@dontknow",
    isLoggedIn:false,
    lastloginDays:["monday","friday"]
}
// now how to access an object
//two ways to do this 
console.log(jsUser.email);
console.log(jsUser["email"]);
/*
[] will work if keys are given in "" becuase in object keys are by default in strings
also . is not used in this case
for . method "" are not needed
**BUTT there is no way to access "full name" by . method you can only access it by [] method
 */