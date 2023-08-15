// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // PARAMETERS: 
      //input - text to be encoded or decoded
      //shift - how much letter is "shifted by". "+" = right, "-" = left
      //encode - whether to encode or decode message; default is true
      //if encode is false, make the shift negative (var shiftValue *= -1)
      
      //if no shift is any of these(not defined, < -25, > 25), return false
      if (shift === 0 ||  shift < -25 || shift > 25 ) return false;
        
      //create a lookup variable to find the index of a given letter in the alphabet 
      const lookup = "abcdefghijklmnopqrstuvwxyz";
      //create a var to hold new string
      let output = "";
      
      //ignore capitals (.lowerCase())
      const lowerCaseInput = input.toLowerCase();
      const formula = encode ? shift : shift * -1;

      //iterate through each of the letters in the input
      for (let i=0; i < lowerCaseInput.length; i++) {
        let originalChar = lowerCaseInput.charAt(i);
        let newChar;
        
        //maintain spaces in translation(& other nonalphabetic symbols). aka stays the same
        if (!lookup.includes(originalChar)) {
            newChar = originalChar;
    
        } else {
            // console.log("originalChar",originalChar);
            //find the alphabet index of the letter using lookup, store in variable j
                //index of
            const originalCharIndex = lookup.indexOf(originalChar);
            // set var newIndex = j + shiftz
            //var shift = 
                  //if encode is false, then take the negative of shift. Otherwise leave it alone. This encompasses this logic: 
                  //if shift is positive and encode is true, go right ("Thinkful", 3, True) //> 'wklqnixo'
                  //if shift is positive and encode is false, go left ("wklqnixo", 3, false) //> 'thinkful'
                  //if shift is negative and encode is true, go left ("Thinkful", -3, True) //> 'qefkhcri'
                  //if shift is negative and encode is false, go right ("qefkhcri, -3, False") //> 'thinkful'
            // identify the char at the new index in lookup and add to output
            let newCharIndex = originalCharIndex + formula;

            //if alphabet shifted "off" wrap around
            //if char goes below a, do this:
            if (newCharIndex < 0) {
              // newIndex + 25
              newCharIndex += 26;

            } 
            //if char goes below z, do this:
            if (newCharIndex > 25) {
                //newIndex - 25
                newCharIndex -= 26;
            }
            
            //text.charAt
            newChar = lookup.charAt(newCharIndex);
        }
        output += newChar;
    }

    return output;

  }

  console.log(caesar("zebra magazine", 3))

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
