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
