// behind the scene these are functions and object but with some syntactical sugar
/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  // as long as we use new keyword constructor is called
  //let we also have a method
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const cahi = new User("cahi", "why@no.com", "123");

console.log(tea.encryptPassword());
// 123abc
console.log(tea.changeUsername());
// CAHI
*/
//=====>>WHAT IS HAPPENING BEHIND THE SCENE<<====
//==>>instead of constructor we use a function with same parameters
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
//==>> to inject methods in function we use .prototype
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};
const tea = new User("tea", "why@not.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
// 123abc
// TEA
// so this gives the same functionality but classes have syntactic sugar bheind the scene this is waht happening
