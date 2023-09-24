## addition on new elements in DOM
## related to four.html
##                  ADDITION OF NEW ELEMENT
consider we have a ul with class language which have an li of javascript and we want to add more languages we can do that seperately and add one by one languages but preffered way is to make a function and then call this function for this perpose
 function addLang(langName){
        // now first we need to creat an li element and then we have to append it in ul 
       const li= document.createElement('li')
       //now we add some value in this li as
       li.innerText=`${langName}`;
       //now to enter this li in ul 
       document.querySelector('.language').appendChild(li);
    }
    addLang();
now we can give any language in argument and it will add  li of this language 
**this is the usuall way we first think that**
## PROCEDURE
1. first creat element
2. select where to add this
3. append this element at desired place
## PROBLEM WITH THIS APPROACH
every time the whole document tree is to be traversed when an element is added what if there were large number of elements were to be added 100 or 1000 or 100000 then taht was a big concern for the page to traverse the whole tree
so a more **Optimized way** is given below which is quite similar to above but with one change  see
function addLangNewMethod(langName){
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li);
    }
now if we want to edit any of these elements 
##           EDIT ELEMENTS
1. first make the referance of what u want to edit
2. then apply the methods as given below
**EDIT-EXAMPLE1**
 now we want to edit these elements 
 we want to select second li 
    const secondLang=document.querySelector('li:nth-child(2)');
    // very easy to play with as we can have 
    // secondLang.innerHTML="Mojo";
    // but this is not an optimized way so we do this as 
    const newLi=document.createElement('li');
    newLi.textContent="Mojo";
    // now we can use new method to add this at the place of second li as
    secondLang.replaceWith(newLi);
**EDIT-EXAMPLE2**
**.outerHTML method**
    // editing first language 
    const firstLang=document.querySelector('li:first-child');
    firstLang.outerHTML="<li>C++</li>";
##                 REMOVING ELEMENT
    //this is very easy for example we want to remove the last li 
    const lastLang=document.querySelector("li:last-child");
    lastLang.remove();
    // this remove Golang