const buttons = document.querySelectorAll('.button');
// console.log(buttons);
// this gives nodelist of buttons
// now we select body
const body = document.querySelector('body');
// now we have body and buttons
// now we want tollop over buttons so we can do it by
buttons.forEach(function (button) {
  console.log(button);
  // now we want to add eventlistner on these buttons so that we come to know what happen whwn someone click on button or mouse hover or anything else here we need to listen click event so
  button.addEventListener('click', function (e) {
    console.log(e);
    // now to check from where this event is comming or on what button you are clicking we use e.target
    console.log(e.target);
    // now we can run conditions that when someone click on specific button what should happen as
    if (e.target.id === 'grey') {
      // body.style.backgroundColor = 'grey';
      //or u can write more expertly
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      // body.style.backgroundColor = 'white';
      //or u can write more expertly
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      // body.style.backgroundColor = 'blue';
      //or u can write more expertly
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      // body.style.backgroundColor = 'yellow';
      //or u can write more expertly
      body.style.backgroundColor = e.target.id;
    }
  });
});
