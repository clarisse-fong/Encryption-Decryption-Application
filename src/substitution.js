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
    
    return encode ? translator(input, regAlphabet, alphabet) : translator(input, alphabet, regAlphabet)  
  }

  function translator (input, currAlphabet, newAlphabet) {
    let output = "";
    
    for (let i = 0; i < input.length; i ++) {
      const currChar = input.charAt(i);
      //IF its a space
      if (currChar === " ") {
        //add space to the output
        output += " ";

      } else {
        const currAlphIndex = currAlphabet.indexOf(currChar.toLowerCase());
        const newChar = newAlphabet.charAt(currAlphIndex)
        output += newChar
      }


    }

    return output;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
