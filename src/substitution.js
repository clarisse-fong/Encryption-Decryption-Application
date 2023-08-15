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

    if (alphabet.length != 26) return false;
    //alphabet.length MUST be 25 or return false
    
    //all letters in alphabet MUST be unique or return false
    //create an object. iterate through all of the elements in the alphabet.
    const regAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const subAlphabetLookup = {};
    const subAlphabetReverseLookup = {}
    
    //for each elem in alphabet, check if it exists in object. 
    for (let i = 0; i < alphabet.length; i++) {
      //If it exists, return false, 
      const currChar = alphabet.charAt(i);
      if (subAlphabetReverseLookup[currChar]) {
        return false;
        //if not add it to the object
      } else {
        subAlphabetReverseLookup[currChar] = i;
        subAlphabetLookup[i] = currChar;
      }
    }
    
    let output = "";
    //ENCODING
    if (encode) {
      //.tolowercase

      // for each elem in the input
      for (let e = 0; e < input.length; e ++) {
        const currChar = input.charAt(e);
        //IF its a space
        if (currChar === " ") {
          //add space to the output
          output += " ";
          
        //ELSE
        } else {
          // find the index of the currChar using indexOf regAlphabet
          const regAlphIndex = regAlphabet.indexOf(currChar.toLowerCase());

          // find the subchar using the charAt(foundIndex) in the subAlphabetLookup
          const subchar = subAlphabetLookup[regAlphIndex];

          // add sub char to output (output += subchar)
          output += subchar
        }
      }
      
      //DECODING
    } else {
      //.tolowercase

      // for each elem in the input
      //IF its a space
      //add space to the output
      //ELSE
      // find the indexOf the currChar using the subAlphabetLookup
      // given the index, use charAt(foundIndex) on regAlphabet to find its sub char
      // add sub char to output (output += subchar)
      
    }

    return output;
      
      //inputs could include spaces, letters, and special texts
    //spaces should be maintained throughout
    //capital letters can be ignored
  }

  console.log(substitution("thinkful", "short")); //> false
  console.log(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")); //> false

  console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"), 'jrufscpw'); //> 'jrufscpw'
  console.log(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"), 'elp xhm xf mbymwwmfj dne')


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
