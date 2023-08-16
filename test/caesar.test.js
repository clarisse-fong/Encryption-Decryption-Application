const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe ("caesar", ()=>{
    it("returns false if the shift value is 0, less than -25, or greater than 25", ()=>{
        
        const response1 = caesar("bonsoir", 0)
        expect(response1).false
        
        const response2 = caesar("bonsoir", -30)
        expect(response2).false

        const response3 = caesar("bonsoir", 610)
        expect(response2).false



    })

    it("ignores capital letters",()=>{
        const response1 = caesar("BONSOIR", 3);
        expect(response1).to.equal("erqvrlu");
        
        const response2 = caesar("BonSoIr", 3);
        expect(response2).to.equal("erqvrlu")



    })

    it("when encoding, handles shifts that goes past the end of the alphabet",()=>{
        const response1 = caesar("zebra", 3);
        expect(response1).to.equal("cheud");

        const response2 = caesar("zebra", -3);
        expect(response2).to.equal("wbyox");
    })

    it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", ()=>{
        const response1 = caesar("hello my name is", 1)
        expect(response1).to.equal("ifmmp nz obnf jt");

        const response2 = caesar("this! is! cool!", -1)
        expect(response2).to.equal("sghr! hr! bnnk!")

        const response3 = caesar("$$$ cha ching!", -1, false) 
        expect(response3).to.equal("$$$ dib dijoh!");
    })
})