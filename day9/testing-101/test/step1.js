const assert = require('node:assert');
describe("enter your objective for the test", function(){
    // context is an alias name for describe
    context("first objective",function(){
      /*   console.log("first objective was called")
      */
    it("should check for both values to be same", function(){
        assert.equal(1,1,"error message if the test fails")
    }) 
    it("should check for 2 objects to be same", function(){
        assert.deepEqual({ title : "Batman" }, { title : "Batman" } )
    }) 

    })
})
// npm i mocha -g 