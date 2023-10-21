const promiseOne=new Promise(function(resolve,reject){
// Do and async task such as
//DB calls ,cryptography,network

setTimeout(function(){
    console.log('Async task is completed');
    resolve();
},1000)

});

// this is how we creat promise
//now we consume this promise by using .then() which is directly connected to resolve
//.then() have a callback function this automatically recieve an argument from whtever happend in above promise from there it recieve a return value for this we have to run resolve method in above 

promiseOne.then(function(){
    console.log('promise consumed');
});

// 2nd==>> second promise 
//SHORTER WAY 
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task 2');
        resolve();
    },1000)
}).then(()=>{
    console.log('Async 2 is resolved');
})

//3rd==>>Promise 

const promiseThree=new Promise(function(resolve,reject){
setTimeout(()=>{

    resolve({userName:"Ar Malik",email:"nothing@why.com"});
},1000)
});
// we now see that object in resolve will become argument for function in .then() so this will be printed to see this we use argument such as user 
promiseThree.then((user)=>{
console.log(user);
});

//4th ==>> promise  
//now we use reject also with .catch and .finally see

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"Malik coding",password:"123"});
        }else{
            reject("ERROR: Smething Went Wrong");
        }
    },1000)
});

promiseFour.then(function(user){
console.log(user);
return user.userName;
}).then((username)=>{
console.log(username);
}).catch(function(error){
console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
});


//5th=>> promise 
//using async and await
//but to handdle error in this meyhod we need to use try catch block also see 

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"Javascript",password:"123"});
        }else{
            reject("ERROR: JS Went Wrong");
        }
    },1000)
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive;
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive();

// another example
// using feth method to get user name from url given

/*
async function getAllUsers(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')

    //convert response into json for furthur use 
    const data= await response.json();
    // we use await for data because this will also take some time to convert into jason 
    console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers();
*/

//another way of doing the same by .then and .catch method as follows 
// here we dont need to use asyn and await because we dont need to to wait because when one then is completed then the other will work and so on
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});


// see the last response is first in node this we will learn in next 