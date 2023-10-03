// first we need to  generate random numbers for this we use hex colurs these colors look like #1233A2 so we shuld use some math to generate some random number which everytime should start from #  so lets do that 
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
} 
// console.log(randomColor());
let intervalId;
const startChangingColor=function(){
    intervalId= setInterval(changeBgColor,1000);
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
   
};
const stopChangingColor=function(){
    clearInterval(intervalId);
    //PRO TIP
    //CORNER CASE:-so for no problem butt the value of intervalId is overwritten again and again so to avoid this we set it null here so all previous values will flush out as we click on stop button 
    intervalId=null;
};
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);