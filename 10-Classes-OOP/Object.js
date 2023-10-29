//============the magic of prototype============//
/*
1.in javascript almost everything is object 
2.the parent of object is nothing so we say it is null
->array==>object==>null
->string==>object==>null

so all the properties of object are inherited by string arry etc because they are child of object so whatever properties are associated with parent are inherited by child also.

BUTT
what about functions ?? 
we see about these in example
*/

function multiplyBy5(num) {
  return num * 5;
}
/*
==>>we can call this as 
multiplyBy5(4);
==>>butt we dont want this what if we do this 
multiplyBy5.power=2
HMMM? we are trying to treat function as object
see the result 
*/
multiplyBy5.power = 2;
console.log(multiplyBy5(4)); //20
console.log(multiplyBy5.power); //2
//see is there prototype of function
console.log(multiplyBy5.prototype); // {}

//this means prototype of function is {} means an empty object sooo we see function is function as well as an object 👏👏👏

// furthur
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// now we inject in function like we do in objects

createUser.prototype.increment = function () {
  this.score++;
  console.log(`New price is ${this.score}`);
};
createUser.prototype.printMe = function () {
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("chai", 20);
const tea = new createUser("tea", 240);
//now we can call methods like objects as
chai.printMe();
chai.increment();
tea.printMe();
tea.increment();

/*
NOTES:-
==>>When new keyword  is used
1.A new object is created: a new keyword instantiate creation of new javascript object
2.A prototype is linked: this means newly created object has access to properties and methods defined on the constructor's prototype.
3.The constructor is called:
4.A new object is returned 
*/
