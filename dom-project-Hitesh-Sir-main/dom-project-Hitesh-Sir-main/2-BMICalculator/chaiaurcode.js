//analyze the html file first
// we first need to select the form because submitt button(calcuate button) is inside the form
const form = document.querySelector('form');
//form is submitted by post type or get type
/* now we know that when we click the submit button the values goes to server but we need to stop this because we are not sending to server so we need to stop the default action of form submission
 */
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //now we need values as height and weight so
  // const height=document.querySelector('#height').value
  // this gives value of height but this will be in string but we need integers so we do this
  const height = parseInt(document.querySelector('#height').value);
  // same for weight
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  // NOTE:- defining these values outside this will give u empty values which we dont want we only want to extract values after someone click on the calculate button
  // now put some checks on values
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid Weight ${weight}`;
  } else {
    //calculation of BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
