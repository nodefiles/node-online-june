let EventEmitter = require("node:events").EventEmitter;

let myEvent = new EventEmitter();
let count = 1;

let inteListener = function(){
    console.log("Intel Event Happened", count);
    count++;
};

//myEvent.addListener("intelEvent",inteListener);
 myEvent.on("intelEvent",inteListener);

let si = setInterval(function(){
    myEvent.emit("intelEvent");
    console.log("interval was triggered")
},1000);

setInterval(function(){
    myEvent.emit("intelEvent");
    console.log("interval was triggered")
},20000);

setTimeout(function(){
    // myEvent.removeListener("intelEvent",inteListener);
    myEvent.off("intelEvent",inteListener);
    clearInterval(si);
},10000);

