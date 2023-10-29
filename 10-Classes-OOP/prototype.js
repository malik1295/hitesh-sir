// this is pure example to understand prototype
//let we have a string and we want to build a method to find its true length i.e other than spaces
//we can do this by trim()??🤔🤔ooo come on we want some special for learning
// lets see
let myName = "Maliksahab     ";
// we can do that BUTT we dont
// console.log(myName.trim().length);
//==>>start with some concepts using arry

let myHeros = ["thor", "spiderman"];
let heropower = {
  thor: "Hammer",
  spiderman: "Sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
// now if we inject something in Object then every object here will have this and  because we are injecting in highest level element so every child will also inherit this as well
/*
// for example inject malik method in object and see whether it is present in our object or not

Object.prototype.malik = function () {
  console.log("malik is present in all objects");
};
heropower.malik();
//yes it is present in this now
// we know array is child of object so this must be present in array also see
myHeros.malik();
//yes it is present in array as well

*/

//==>>>Inheritance<<<==//
//prototypal inheritance
//+++++++++old syntax++++++++++//

const User = {
  name: "chai",
  email: "dontknow@wharever.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//+++Modern Syntax+++++++//
Object.setPrototypeOf(TeachingSupport, Teacher);

// in classes same thing is happening but different keywords as extends super but behind the scene this is what happeninig

// now come to our problem
let anotherUsername = "meandmyself     ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`True length is :${this.trim().length}`);
};
anotherUsername.trueLength(); //11
// as this method is in all string so we can check as
"meisdeveloper  ".trueLength();
