//****switch syntax*****//
/*
==>> here key means the variable and value means its different values which are being checked 
==> when the case match then code afte this match will run throughout except the default case
==>> to avoid this break; is used 

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
//EXAMPLE
const month=3
switch (month) {
    case 1:
        console.log("Januarry");
        break;
    case 2:
        console.log("Februry");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("not valid month");
        break;
}
// ==>> March