// object literal
// means literly an object

const user={
    username:"mendis",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log(`Username:${this.username}`);
        console.log(this);
    }
}
// this keyword is necessary to use for the present context because without this function will not know about what to get from outside of its context 
//==>> this means jiss 
// ==>>if we console this only in above function we will get current context which in this case is user object so it gives the object
// but if we conse this in browser we will get many interesting things see in browser


// console.log(user.getUserDetails());

// problem arises if we need so many user soas many times we need to write objets and it will be difficult for large number of users so we need to repeat as many times so this is resolved by CONSTRUCTOR FUNCTION  

//CONSTRUCTOR FUNCTION 
// IMPORTANCE OF >>(NEW)<< KEYWORD
// we have used these before such as 
/*
const promiseOne=new Promise();
const date=new Date();
*/
// these are constructor functions these allow us to form multiple instances from one object 
// new keyword is used to form new context


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    //we can give method also
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    // return this
    //no need of return this it is written implicitly
}

// const user1=User('hitesh',6,true);
// const user2=User('malik',23,false);
// console.log(user1);

// SURPRISED? see that we didnt printed user2 but the console gives overwritten values due to user 2 so this is not good if values are overwritten 
// thats why we use constructor function i.e new which gives us a new instant or copy each time we need for particular object or function 
// so we need only new keyword before above as 


const user1=new User('hitesh',6,true);
const user2=new User('malik',23,false);
console.log(user1);
console.log(user2);

// now the values are not overwritten 