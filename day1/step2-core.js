/* 
var : object scope + hoisting
let : block scope
const : block scope + constant that can not be changed + always need to be initialized when you create it
*/

/* 
function myfun(){ 
    console.log("vlaue of i before the loop",i);// hoisting 
    // code block
    for(var i = 0; i < 10; i++){
        console.log(i);
    };
    console.log("vlaue of i out of the loop",i);// block and object scope
}
myfun(); 
*/

/* 
const user = "guest";

console.log(user); 
*/

/* 
var i = 1;
function callBackFun(){
    // i = i+1;
    i++;
    console.log("callback fun was called");
    if(i > 5){
        clearInterval(si);
    }
};
let si = setInterval(callBackFun,500);
*/


/* 
let callBackFun = function(){
    
} 
*/

/* 
let callBackFun = () => {
    console.log("callbackfun was called")
};

setTimeout(callBackFun, 3000); 
*/


/* */

let callBackFun1 = () => {
    console.log("callbackfun from setImmediate was called")
};

setImmediate(callBackFun1);  

function calledbyprocess(){
    console.log("process.nextTick was called")
}

process.nextTick(calledbyprocess);

let callBackFun2 = () => {
    console.log("callbackfun 2 was called")
};

callBackFun2();


// console.log(process.argv)

