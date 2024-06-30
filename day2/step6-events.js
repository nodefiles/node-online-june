let EventEmitter = require("node:events").EventEmitter;

let myEvent = new EventEmitter();

// myEvent.setMaxListeners(4);

// setTimeout(()=> {
//     // console.log("intelEvent Happened");
// },2000);

let firstfun = function(){
    console.log("intel Event Happened first");
};
let secondfun = function(){
    console.log("intel Event Happened second");
};
let thirdfun = function(){
    console.log("intel Event Happened third");
};
let fourthfun = function(){
    console.log("intel Event Happened fourth");
};
let fifthfun = function(){
    console.log("intel Event Happened fifth");
};
myEvent.addListener("intelEvent", firstfun);
myEvent.addListener("intelEvent", secondfun);
myEvent.addListener("intelEvent", thirdfun);
myEvent.addListener("intelEvent", fourthfun);
myEvent.addListener("intelEvent", fifthfun);

myEvent.removeListener("intelEvent",thirdfun);
myEvent.removeListener("intelEvent",fourthfun);


setInterval(function(){
    myEvent.emit("intelEvent");
},1000)


setTimeout(()=> myEvent.removeAllListeners("intelEvent"), 10000)
// console.log(myEvent.listenerCount("intelEvent"));


/* 
create an event that is dispatched once every second for 10 seconds only
*/