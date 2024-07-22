// function
let adder = function(num1, num2){
    return num1 + num2;
}

// callback function
let addCallback = function(a, b, callback){
    setTimeout(function(){
        return callback(null, a+b)
    }, 1000)
}


let addPromiseResolve = function(num1, num2){
    return Promise.resolve(num1 + num2);
};


let addPromiseReject = function(){
    // return Promise.reject("My Error");
    return Promise.reject(new Error("My Error Message"));
};

export {
    adder,
    addCallback,
    addPromiseResolve,
    addPromiseReject
}