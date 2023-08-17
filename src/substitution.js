// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //PARAMS:
      //input(string) - text to be encoded or decoded
      //alphabet(string)- substitution alphabet
      //encode(boolean) - whether to encode or decode
  
    if (!alphabet || alphabet.length != 26) return false;
    //alphabet.length MUST be 25 or return false
    
    //all letters in alphabet MUST be unique or return false
    //create an object. iterate through all of the elements in the alphabet.
    const regAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const subAlphabetLookup = {} //
    
    //for each elem in alphabet, check if it exists in the object. 
    for (let i = 0; i < alphabet.length; i++) {
      //If it exists, return false, 
      const currChar = alphabet.charAt(i);
      if (subAlphabetLookup[currChar]) {
        return false;
        //if not add it to the object
      } else {
        subAlphabetLookup[currChar] = i;
      }
    }
    
    let output = "";
    //ENCODING
    if (encode) {
      //.tolowercase

      // for each elem in the input
      for (let j = 0; j < input.length; j ++) {
        const currChar = input.charAt(j);
        //IF its a space
        if (currChar === " ") {
          //add space to the output
          output += " ";
          
        //ELSE
        } else {
          // find the index of the currChar using indexOf regAlphabet
          const regAlphIndex = regAlphabet.indexOf(currChar.toLowerCase());

          // find the subchar using the charAt(foundIndex) in the subAlphabetLookup
          const subchar = alphabet.charAt(regAlphIndex);

          // add sub char to output (output += subchar)
          output += subchar
        }
      }
      
      //DECODING
    } else {
      //.tolowercase
        // for each elem in the input
        for (let j = 0; j < input.length; j++) {
          //IF its a space
          const currChar = input.charAt(j)
          if (currChar === " ") {
            //add space to the output
            output += " ";
          
          //ELSE
          } else {
            // find the regular alphabet char of currChar using the subAlphabetLookup
            const subCharIndex = subAlphabetLookup[currChar.toLowerCase()]
            const regAlphChar = regAlphabet.charAt(subCharIndex);
            output += regAlphChar;
        }
      }
      // given the index, use charAt(foundIndex) on regAlphabet to find its sub char
      // add sub char to output (output += subchar)
      
    }

    return output;
      
      //inputs could include spaces, letters, and special texts
    //spaces should be maintained throughout
    //capital letters can be ignored
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
