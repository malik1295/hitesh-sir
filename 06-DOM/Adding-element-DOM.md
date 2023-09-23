## CREATING NEW ELEMENTS IN HTML PAGE USING JS DOM
**now we are working with two.html**
## parent to child
first what we do is to see what is inside our parent elememnt so we select it with query selector and we have given class name parent so we write
// const parent=document.queryselector('.parent')
if you hold it in variable and console you will see that it conatin the div with class parent
//se waht is inside parent
    console.log(parent);
// inside this we can find children as 
    console.log(parent.children);
this gives us an HTML collection
HTMLCollection(4) [div.day, div.day, div.day, div.day]
as this is array like element so we can find something as
console.log(parent.children[1]);
//this gives 2nd child of parent div
// we can get its inner text or inner html as 
console.log(parent.children[1].innerHTML);
// Tuesday
**looping on this html collection**
we know that HTMLcollection is not an array but parent.children[i] is so we can apply classic for loop atleast this will work if anything is like array
// now we can loop the collection
    for (let i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i].innerHTML);
    }
we can stlye the elements as u can see in two.html file now
**parent.firstElementChild**
this gives first child of the parent
**console.log(parent.lastElementChild)**
this gives last child of parent 
and obiviously we can apply methods on it like style or html now
## child to parent 
first select any child
const dayOne=document.querySelector('.day');
now query selector is very expensive operation it has to move from the whole thread to execute it traverse through the whole tree actually
so we can go from this child to parent in an optimize way as 
**console.log(dayOne.parentElement);**
// this give parent div
// we can also go from this child to its next sibling as 
**console.log(dayOne.nextElementSibling);**
## parent.childNodes
this gives you a nodelist but it does not give name of days instaed it is a complex tree structure and interestingly it give 9 value but you will see in parent div there are 4 childs only 
actullay this counts line break also a sits elemtnt as text node as u see in two.html
**importance**THE Whole react is based on these childnodes 
