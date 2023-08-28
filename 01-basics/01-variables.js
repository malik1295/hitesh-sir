const accountId = 144553
let accountEmail = "jee@gmail.com"
var accountPassword = "12345"
accountCity = "lalian"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "dubai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
you see const type cannot be rewrite again 
you can define variables without a datatype
console.table([]) is usefulll to console more than one things
let is usefull than var because of its block or function scope
*/ 