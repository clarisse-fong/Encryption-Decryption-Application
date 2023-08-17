const {expect} = require("chai");
const {substitution} = require("../src/substitution.js")

describe("substitution", ()=>{
    it("it returns false if the given alphabet isn't exactly 26 letters long",()=>{
        
        const response1 = substitution("cab","abcdefg")
        expect(response1).false;
        
        const response2 = substitution("yellow", "abcdefghijklmnopqrstuvwyxz!23456")
        expect(response2).false;
    })

    it("it correctly translates the given phrase, based on the alphabet given to the function",()=>{
        
        const response1 = substitution("happy", "123456789abcdefghijklmnopq");
        expect(response1).to.equal("81ggp");

        const response2 = substitution("elephant", 
        "!1@2#4$5%6^7&8*9(0)abcdert");
        expect(response2).to.equal("#7#95!8a");
    })

    it("it returns false if there are any duplicate characters in the given alphabet",()=>{
        const response1 = substitution("happy", "123456789abcdefghijklqqqqq");

        expect(response1).false;

        const response2 = substitution("happy", "111156789abcdefghijklmnopq");
        expect(response2).false;

        const response3 = substitution("happy", "!1@2#4$5%6^&&&*9(0)abcdert");
        expect(response3).false;

    })

    it("it maintains spaces in the message, before and after encoding or decoding",()=>{
        
        const response1 = substitution("i am a happy elephant", "!1@2#4$5%6^7&8*9(0)abcdert")
        expect(response1).to.equal("% !& ! 5!99r #7#95!8a")

        const response2 = substitution("% !& ! 5!99r #7#95!8a", "!1@2#4$5%6^7&8*9(0)abcdert", false)
        expect(response2).to.equal("i am a happy elephant")

    })

    it("it ignores capital letters",()=>{
        const response1 = substitution("IAmAHappyElephant", "!1@2#4$5%6^7&8*9(0)abcdert")
        expect(response1).to.equal("%!&!5!99r#7#95!8a")

        const response2 = substitution("IAMAHAPPYELEPHANT", "!1@2#4$5%6^7&8*9(0)abcdert")
        expect(response2).to.equal("%!&!5!99r#7#95!8a")

    })
})
