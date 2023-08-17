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
    if (shift === 0 || shift < -25 || shift > 25) return false;

    //create a lookup variable to find the index of a given letter in the alphabet
    const lookup = "abcdefghijklmnopqrstuvwxyz";
    //create a var to hold new string
    let output = "";

    //ignore capitals (.lowerCase())
    const lowerCaseInput = input.toLowerCase();

    //acounts for which way to go depending on encoding or decoding
    const formula = encode ? shift : shift * -1;

    //iterate through each of the letters in the input
    for (let i = 0; i < lowerCaseInput.length; i++) {
      let originalChar = lowerCaseInput.charAt(i);
      output += translateCharCaesar(originalChar, lookup, formula);
    }

    return output;
  }

  function findCharAt(charIndex, lookup) {
    if (charIndex < 0) {
      // newIndex + 25
      charIndex += 26;
    }
    //if char goes below z, do this:
    if (charIndex > 25) {
      //newIndex - 25
      charIndex -= 26;
    }
    return lookup.charAt(charIndex);
  }

  function translateCharCaesar(originalChar, lookup, formula) {
    if (!lookup.includes(originalChar)) {
      return originalChar;
    } else {
      //find the alphabet index of the letter using lookup, store in variable j
      const originalCharIndex = lookup.indexOf(originalChar);

      // identify the char at the new index in lookup and add to output
      let newCharIndex = originalCharIndex + formula;

      //if alphabet shifted "off" wrap around
      //if char goes below a, do this:
      return findCharAt(newCharIndex, lookup);
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
