//OBJECTS IN DEPTH
// getOwnPropertyDescriptor
//==>>it tells u hidden things about object
//==>> by this we can disable properties of objects such as itteration or other properties
//FOR EXAMPLE
// we know that value of PI is fixed in Math we cannot change it so why we cannot overwrite it even if we try
console.log(Math.PI); //3.141592653589793
Math.PI = 5;
console.log(Math.PI); //3.141592653589793
// so we cannot overwrite PI so there must be some hiden properies which are disabled such as writable or so lets explore

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// no see
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
//==>>the descriptor says that the PI is not writable because writable property is set false
//=====>>>CAN WE SUCH THINGS TO OUR OBJECTS?? YESS actually
// so we can set default properties so that no one can change these

const chai = {
  name: "ginger cahi",
  price: 250,
  isAvailable: true,
  orderChi: function () {
    console.log("chai nhi bni");
  },
};
// now lets se descriptor of this object
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//this gives
/*
{
  value: 'ginger cahi',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
// se it is writeable and enumerable
//let disable these as
//now we can change or define properties in our object as
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,
});
// now see
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//now we get
/*
{
  value: 'ginger cahi',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
// see we have disabled the two properties
// if we loop over the properties of object using for of loop we will see that name property will not come also lets add a function also in chai above

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// the output is
/*
price : 250
isAvailable : true
*/
// see the name property is not available here because we set  numerable to false if we make it true it will be available
