import { expect } from "chai";
import { adder, addCallback, addPromiseReject, addPromiseResolve } from "../app.js";
//-------------------------------------

describe("testing app", ()=> {
   /*  context("testing adder", () => {
        it("should add 5 and 6 to get 11", ()=>{
            expect(adder(5,6)).to.equal(11);
        })
    }) */
    context("testing callback", () => {
        it("should check the callback function", (done)=>{
           /*  addCallback(null,6,function(error, result){
                expect(error).to.not.exist;
            }) */
            /* 
            addCallback(5,6,function(error, result){
                // expect(error).to.not.exist;
                expect(result).to.equal(11);
            }) 
            */

           /*  
           addCallback(5,6, (err, result) => {
                // expect(num2).to.equal(6);
                // expect(num1+num2).to.equal(11);
                expect(result).to.equal(11);
                done();
                }) 
                */
            done();
        })
    });

    context("should test the promise resolve", () => {
            it("should add number using promise", (done) => {
                addPromiseResolve(5,6).then(res => {
                    expect(res).to.equal(11);
                    done();
                })
            })
    });

    context("test the promise that rejects", () => {
        it("should log error", (done) => {
            addPromiseReject()
            .then( res =>{ 
                console.log("res", res);
                // done();
            })
            .catch(err => {
                expect(err).to.equal("My Error Message");
            })
            done();
        })
    })
})