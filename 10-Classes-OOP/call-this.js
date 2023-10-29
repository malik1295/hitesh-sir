function SetUsername(username) {
  // suppose here it is doing some complex calculations from DB calls
  this.username = username;
  console.log("called"); //to se if it is called or nots
}
// now suppose we have some other function which creat user

function creatUser(username, email, password) {
  SetUsername.call(this, username);
  //here we are using username by calling above function so technically the name should be accessed  here
  this.email = email;
  this.password = password;
}
const chai = new creatUser("chai", "noone@me.com", "123");
console.log(chai);
// here it is giving
//{ email: 'noone@me.com', password: '123' }
/*
 Surprised?😮😮 so not what  we expect username is not set
==>> what happend here is the function is not called yet🙄🙄 dont look at the () and think it is called technically(for our use) means call to hoa but kisi kam ka call ni hoa 
==>> what is issue then?:as long as it is called it is removed from the call stack before furthur implementation  and variable declared in it are also removed from the EC 
==>>SOLUTION:-so it is not called yet so we need to use .call() to call username function which will hold the referance also and the function will not removed from EC 
==>> also give this to it so the variables will be in that function where it is called 
now when we console we get 
called
creatUser { username: 'chai', email: 'noone@me.com', password: '123' }

this is what we required 
*/
