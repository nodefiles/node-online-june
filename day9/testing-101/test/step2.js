const assert = require('node:assert');
describe("enter your objective for the test", function(){
    context("first context", function(){
        before(function(){
            console.log("Before was called")
            console.log("XXXXXXXXXXXXXXXXXX")
        })
        after(function(){
            console.log("After was called")
            console.log("XXXXXXXXXXXXXXXXXX")
        })
        beforeEach(function(){
            console.log("Before Each was called")
            console.log("========================")
        })
        afterEach(function(){
            console.log("After Each was called")
            console.log("========================")
        })
        // first test
        it("should check for both values to be same", function(){
            assert.equal(1,2,"error message if the test fails")
        }) 
        // second test
        it("should check for 2 objects to be same", function(){
            assert.deepEqual({ title : "Batman" }, { title : "Batman" } )
        }) 
        // pending test
        it("this test is pending") 
    })

    context("second context", function(){
        before(function(){
            console.log("Before was called")
            console.log("XXXXXXXXXXXXXXXXXX")
        })
        after(function(){
            console.log("After was called")
            console.log("XXXXXXXXXXXXXXXXXX")
        })
        beforeEach(function(){
            console.log("Before Each was called")
            console.log("========================")
        })
        afterEach(function(){
            console.log("After Each was called")
            console.log("========================")
        })
        // first test
        it("should check for both values to be same", function(){
            assert.equal(1,2,"error message if the test fails")
        }) 
        // second test
        it("should check for 2 objects to be same", function(){
            assert.deepEqual({ title : "Batman" }, { title : "Batman" } )
        }) 
        // pending test
        it("this test is pending") 
    })

    context("third context", function(){
        before(function(){
            console.log("Before was called")
            console.log("XXXXXXXXXXXXXXXXXX")
        })
        after(function(){
            console.log("After was called")
            console.log("XXXXXXXXXXXXXXXXXX")
        })
        beforeEach(function(){
            console.log("Before Each was called")
            console.log("========================")
        })
        afterEach(function(){
            console.log("After Each was called")
            console.log("========================")
        })
        // first test
        it("should check for both values to be same", function(){
            assert.equal(1,2,"error message if the test fails")
        }) 
        // second test
        it("should check for 2 objects to be same", function(){
            assert.deepEqual({ title : "Batman" }, { title : "Batman" } )
        }) 
        // pending test
        it("this test is pending") 
    })
})
