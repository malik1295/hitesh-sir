//****first we talk about==>this<==***//
/*
this is used to reffer current context so this keyword is used to access all the variables in a current context
*/
//to understand it consider an object
/*
now if u want to access username dont write ${username} 
==> as here current context is object so to reffer this current context use
=> ${this.username} 
*/
// const user={
//     username:"Newton",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
//     }
// }
//now to print message
// console.log(user.welcomeMessage());
// Newton,welcome to website
//now if we change username then 
// user.username="EINSTEIN"
// console.log(user.welcomeMessage());
// EINSTEIN,welcome to website
// now if u write simply console.log(this)in the object above inside function it gives
/*
Newton,welcome to website
{
  username: 'Newton',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
undefined
EINSTEIN,welcome to website
{
  username: 'EINSTEIN',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
undefined
*/
// see it gives u both context one before changibg username and one after that means this always reffer to curent context
// this also shows that consle.log(this) holds very important information
//******now if we write console.log(this) outside of object and commint other console we get **************//
// console.log(this);
//{}
/*
so in node environment we get {} empty object from console.log(this); but if you writein browser console then you get more out of this because in browser window is global object so that is current contextthere but here it is empty object
 */
// will ths work in function see
//  function one(){
//   console.log(this);
// }
// one();
//see now it gives a lot of information 
// but if u give username and print using this in function can we do this see?
function one(){
  username="ASAD"
  console.log(this.username);
}
one();
//ASAD its working
//******Arrow functon+++++ ()=>{} ****//
