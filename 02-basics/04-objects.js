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
// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="naeem"
// tinderUser.isLogedIn=false
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
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//*******using spread operator******//
// best way is use of spread operator//
 const obj3={...obj1,...obj2}
//  console.log(obj3);
 //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 //********accsess keys or values****//
 // very  usefull concept
 // we have previously
 const tinderUser={}
 tinderUser.id="123abc"
 tinderUser.name="naeem"
 tinderUser.isLogedIn=false
//  console.log(tinderUser);
 //{ id: '123abc', name: 'naeem', isLogedIn: false }
//*****to access keys 
// console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLogedIn' ]
//******to access values
// console.log(Object.values(tinderUser));
// [ '123abc', 'naeem', false ]
/*
***********important result************
see the keys and values come in array so it very usefull to store these in a variable and then run methods lke loops  to access all these keys or values
*/
//********.entries()**********//
// console.log(Object.entries(tinderUser));
/*
==>returns array in which all key value pairs become seperate array 
 [ [ 'id', '123abc' ], [ 'name', 'naeem' ], [ 'isLogedIn', false ] ]
*/
//**********hasOwnProperty***********//
/*
this we can use to check that whether the object has the specified propert it returns true if property exist otherwise false
*/
// console.log(tinderUser.hasOwnProperty("isLogedIn"));//true

//*****object destructuring**********//

const course={
    courseName:"javascript by hitesh sir",
    price:"dedication",
    courseInstructor:"Hitesh sir"
}
/*
to access value we normally do 
==> course.corseInstructor
but what if we have to access the value again and again so it will be tedius  to write again and again course.name or course .price
so we use object destructuring to access the keys conveniently
*/ 
// the method of destructuring is 
// ==> const {}=objectname
//course in this case so
// const {}=course

// const {courseInstructor}=course
/*
now after this point we dint need to write
==>console.log(course.courseinstructor)
to access course instructor we can simply write 
==>console.log(courseinstructor)
to access courseinstructor see
*/
// console.log(courseInstructor);
// Hitesh sir
/*
moreover if you think courseinstructor is big name you can give a short name and then can access it by this name see
*/
const {courseInstructor:instructor}=course
console.log(instructor);
// Hitesh sir
