// object singleton
/*
previously we talk about object literals now we talk about sigleton or how to creat them by constructor method
*/
// const tinderUser=new Object();
// const tinderUser={}
/*
both are same and return empty object{}
but
const tinderUser=new Object();
==> is sigleton object
const tinderUser={}
==> is non singleton object
*/
// now give some properties to object
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="naeem"
tinderUser.isLogedIn=false
// console.log(tinderUser);
// { id: '123abc', name: 'naeem', isLogedIn: false }
//*****object in object and access*******//
const regularUser={
    email:"none@google.com",
    fullname:{
        userfullname:{
            firstname:"Muhammad",
            lastname:"Malik"
        }
    }
}
// console.log(regularUser.fullname);
// { userfullname: { firstname: 'Muhammad', lastname: 'Malik' } }
// to furthur access
// console.log(regularUser.fullname.userfullname);
// { firstname: 'Muhammad', lastname: 'Malik' }
// for first name
// console.log(regularUser.fullname.userfullname.firstname);
// Muhammad
//***cobine or merge objects******//
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// what not to do is
// const obj3={obj1,obj2}
// console.log(obj3);
// this gives objec inside object which we dont want see
/*
{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
*/
//***Object.assign()******//

/*
==> this is correct way to do that 
this coppy all the values from the source objects to a target object ,returns the target object
so we have to assign it name se
obj3=Object.assign()
==> you can useit as 
obj3=Object.assign({},obj1,obj2) 
==> or as 
obj3=Object.assign(obj1,obj2) 
here all values of obj2 are going in obj1 treating it as trget
but first one is preferred more because you give empty {} and want that both objects obj1 and obj2 fall in it this{} this is also a target object
*/
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }