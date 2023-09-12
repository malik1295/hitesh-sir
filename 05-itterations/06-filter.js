const coding=["js","ruby","cpp","python","java"]
// in theprevious file we see that we can access the values/items of this array by forEach method 
// but can we store these values in some variable and use them for other perpose or apply some methods on it see 
//does it return any values? or didn't
// const values=coding.forEach((item)=>{
// console.log(item);
// })
// console.log(values);
// it gives values as was giving before but returned undefined
// you may say we returned nothing thts why so do this and see
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
//     })
//     console.log(values);
    // still doing same
    // this means the for each return nothing whether you want or not
// see how can we deal this 
//*********filter method*******//
/*
Returns the elements of an array that meet the condition specified in a callback functio
*/
// as this return values so we must store these in some variables
const myNums=[1,2,3,4,5,6,7,8,9,10]
// if you want numbers greater than 4
// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]
// but if you use {} in arrow function then use return otherwise it will not work (remember we studied this in arrow function)
// const newNums=myNums.filter((num)=> {
//     return num>4})
// console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]
// !!!! NOW if u are insisted to do this by forEach method than you can do it by using if condition see
const requiredNums=[]
myNums.forEach((nums)=>{
    if(nums>4){
        requiredNums.push(nums)
    }
})
// console.log(requiredNums);
// [ 5, 6, 7, 8, 9, 10 ]
// now some practice by example on filter method
// this kind of data you will get from database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//to get books whose gonere is history we use this method see
  let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks);
  /*
  we get this 
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/
// now the user want those books which were publisshed after 2000 for this see
// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 2000
// })
//   console.log(userBooks); 
  /*
  we get these results 
  [
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/
// if someone is inerested in books that published after 1995 and  their gener is history the see 
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks); 
  /*
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/