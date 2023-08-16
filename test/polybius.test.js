const {expect} = require("chai");
const {polybius} = require("../src/polybius.js")

describe("polybius", ()=>{
    
    it("when encoding, it translates the letters 'i' and 'j' to '42'",()=>{
        const response1 = polybius("iiiiii");
        expect(response1).to.equal("424242424242");

        const response2 = polybius("jjjjjj");
        expect(response2).to.equal("424242424242");

        const response3 = polybius("ijijij");
        expect(response3).to.equal("424242424242");
    })

    it("when decoding, it translates '42' to '(i/j)'", ()=>{
        const response1 = polybius("4251131343", false);
        expect(response1).to.equal("(i/j)ello");
    })

    it("it ignores capital letters", ()=>{
        const response1 = polybius("HAHAHA");
        expect(response1).to.equal("321132113211");

        const response2 = polybius("HaHaHa");
        expect(response2).to.equal("321132113211");

    })

    it("it maintains spaces in the message, before and after encoding or decoding", ()=>{
        const response1 = polybius("a b c d e f", true);
        expect(response1).to.equal("11 21 31 41 51 12");

        const response2 = polybius("11 21 31 41 51", false);
        expect(response2).to.equal("a b c d e")
    })

})