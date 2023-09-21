## the story start from console.log(window)
now window is a global object in browser if u run above code in browser consle there are lot of properties in this as u see but we start with document as we are interested in this
## you can access the document by 
**console.log(window.document)**
by this u will get the whole document i.e html document 
as this is very common so u dnt need to write window.document everytime u can just console document and u will get that
butt by first method you get many things and by this method u get only document 
we can do that by
**console.dir(document)** and u get all the other things but here we dont need all these
now the most important thing is to understand this document object . what it contains how many childs it have how many siblings of these childs are there in it .**Understanding this document object is very important for DOM**
## accessing div, heading,paragraph or any tag is possible if u know the **id** or **class** it contained
##     SELECTORS
for this we use different methods we see all these one by one 
## 1. document.getElementById('idname')
this is the way to target element by id 
as in our one.html we target h1 by id as 
**document.getElementById('title')**
because we have given title id in h1 tag
by this we get heading hi whole html
## 2. document.getElementById('title').className
this gives class name in this html portion
## 3. document.getElementById('title').getAttribute('key of attribute')
this gives you the name of attribute in that specific portion such as 
**document.getElementById('title').getAttribute('id')**
that returns name of id i.e title
## 4. document.getElementById('title').setAttribute('key of attribute','name of attribute')
by this we can rewrite the attribute for example if want to overite class then we do it as 
**document.getElementById('title').setAttribute('class','test')**
this will change the previou class name by test means it will overwite definately

now for furthur disussion we store our title portion in some variable and then we can play with it easily so 
**const title=document.getElementById('title')**
now we can use more methode on title as 
## 5. title.style
by this we can give some css to our selected element suh as background color padding etc as follows
**title.style.backgroundColor='green'**
**title.style.padding="15px"**
**title.style.borderRadius='10px'**
and many more

++now how you will get or add content in the page see ++
## 6. title.textContent
by this you an get text content of the selected portion such as here what is written in title id portion we will get that
## 8. title.innerText
## 9. title.innerHTML
now you see that these also return the same thing means the text content but what is the use of these 
innerHTML is very easy it gives you all the things means text and htnl both means wahtever you write in title portion  but
actually there is the difference between 
**title.textContent** and **title.innerText**
for this diifernce we add some content in span in the h1 tag but then add a style in span tag that display:none
now if you use **title.iinerText** it will the text which is vissible but if you write **title.textContent** this gives you the whole text inside the title portion even which is hidden by some css property as we have done
## 10. document.querySelector('tagname or id name class name')
for example
**document.querySelector('h1')**
this gives the first h1 tag from all the h1 tags that re in the page
as there is normally only one h1 in page so it gives yoy that 
we can select id or class also this is more **like in css selectors** when we write id by # sign and class by . sign we can select here also like this
FOR id
**document.querySelector('#title')**
FOR class
**document.querySelector('.heading')**
we can also use it for other tags such as for input as 
**document.querySelector('input')**
we can select input using its type as 
**document.querySelector('input[type="pasword"]')**
using css selectors we can access many things such as
**document.querySelector('p:first-child')**
 suppose we have an unordered list in which three li items are there
 **trick to do this in html** is ul>li*3
 now suppose we want to change he color of first li for this we first slect ul then store it in variable myul and then again use query selector to do that
 **myul=document.querySelector('ul')**
 now we use queryselector on myul
 **myul.querySelector('li')**
 this gives first li now store in other variable and run what u want
 **myli=myul.querySelector('li')**
 now to change color we use 
**myli.style.backgroundColor='yellow'**
also you can give padding or can change iiner text or aything u want from the previous knowledge





