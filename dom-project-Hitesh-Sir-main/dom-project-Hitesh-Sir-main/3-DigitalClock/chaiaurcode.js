// we need to display time where ? in clock so access clock first
const clock = document.getElementById('clock');
// now as digital clock changes at everysecond so for this we first need date
// let date = new Date();
// now we can print this date
// console.log(date.toLocaleTimeString());
//this gives current time  but this is in console we want this in colock an moreover we want that it keeps updating everytime so we use setInterval method by giving it  the interval after which it run itself
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // but we didnt need it in console we need in clock so
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
