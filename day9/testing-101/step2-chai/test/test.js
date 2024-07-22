/* let chai = require("chai");
let expect = chai.expect; */
import {expect} from "chai";
import { hero } from "./mymodule.js";

describe("using chai for test", () => {
    it("should compare 2 values", ()=> {
       // expect(1).to.equal(1);
       // this test fails as the object in memory is not the same
       // expect({ title : "Batman" }).to.equal({ title : "Batman" });

       // this test will pass because we are checking if they are identical
       expect({ title : "Batman" }).to.deep.equal({ title : "Batman" });

        /* let hero = { 
            title : "Batman",
            power : 6
        }; */
        expect(hero).to.equal(hero);
        expect({}).to.be.a("string");
        expect("{}").to.be.a("string");
        expect({}).to.be.a("object");
        expect([]).to.be.a("array");

       /*
        expect(hero.power > 5).to.be.true;
        expect(hero.power < 5).to.be.false;
        expect(hero.power).to.be.lessThan(10);
        */
       // expect({}).to.be.a('string'); 
       // expect({}).to.be.a('object');
       // expect([]).to.be.a('array');
       // expect(hero.power).to.be.a('number');
       // expect(hero.title).to.be.a("string").with.lengthOf(6);
       // expect([1,2,3]).to.lengthOf(3);
       // expect(null).to.be.null;
       // expect(NaN).to.be.NaN;
       // expect(undefined).to.be.undefined;
       // expect(undefined).to.not.exist;
       // expect(hero).to.exist; // in situations where we dont know the value yet

    })
})