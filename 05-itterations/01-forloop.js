// for loop 
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}
// this will print numbers from 0 to 9 
// you can use some condition also see
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}
// again same output butt at 5 first condition run and then 5 and than so on 
// loop inside loop
for (let i = 0; i <=10; i++) {
    console.log(`Oter loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
    console.log(`Inner loop value:${j} and outer loop number ${i}`);
    }
    
} 