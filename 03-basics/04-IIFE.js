// Imideatly Invoked Function Eexpression
/*
=====>>>NEED of IIFE<<<====
sometime we write a file that contain database connection and we want that as our applicaton start that file run and immediately connect with database.
why this immediate because we want to avoid from global scope poluton like if we have defined some variabls in global scope then this may polute the database file because child can take values from  parent as we have discussed in scopes so to avoid this polution we want to run our function imediately thats why we use IIFE 
*/
/*
====>>How to Form IFFE<<====
==> syntax: ()();
 first () is used to write the defination of function  and second()is used to execute itand then  end with ;
*/
//  we write normal function as 
/*
function chai(){
    console.log(`Connected with dtabase`)
}
chai()
*/
//********IIFE is written as********//
(function chai(){
    console.log(`Connected with dtabase`)
})();
//Connected with dtabase
//*****IIFE with Arrow function*****//
( ()=>{
    console.log(`Connected with dtabase two`)
})();
// Connected with dtabase two
// if you want a variable as argument then pass a parameter then you can give an argument in last() see
( (name)=>{
    console.log(`Connected with dtabase two ${name}`)
})("Hassan");
//Connected with dtabase two Hassan
// use of ; is must  otherwise the code will not work specially if two IIFE are side by side so make the habbit of putting ; atthe end as ()();