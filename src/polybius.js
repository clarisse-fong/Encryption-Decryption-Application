// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // PARAMS: input, encode
    	//string - inputted text
    		// assume that there will no symbols. only spaces and letters
    	//boolean(defaults true) - indicates whether to encode or decode the message

	//if decoding, check if the length of the input string is even. Else return false
	
  const noSpacesArray = input.split(" ");
  const noSpacesString = noSpacesArray.join('');
  
	if ((!encode) && (noSpacesString.length % 2 != 0)) return false;


	//create a lookup for encoding letters to numbers
	const lookup = {a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "41", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45",z: "55"}

	//create a reverseLookup for decoding numbers to letters
	const reverseLookup = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35:"x", 45: "y", 55: "z"}

	//output variable = ""
  let output = "";
	
	//IF ENCODING
	if (encode) {
		//for each letter in the input
		for (let i = 0; i < input.length; i++) {
			const currChar = input.charAt(i).toLowerCase();
			//if its a space, then just add a space to the output
			if (currChar === " ") {
				output += " "
			
			// else, use the lookup o find the corresponding numbers
			} else {
				const numString = lookup[currChar]
        output += numString;
			}
		}
				 
	//ELSE DECODING
	} else {
			//for loop that iterates by 2 
      for (let i = 0; i < input.length; i += 2 ) {
        let firstChar = input.charAt(i);
        let secondChar = input.charAt(i + 1)

        //if there's a space. 
          //for firstChar, then just make secondChar the first char, adjust i
          //for second char, then skip the space and make the next char first char, adjust i
        if (firstChar === " ") {
          output += " "
          i -= 1;
          
        } 
        else {
          const lookupString = firstChar + secondChar
        const letterCorr = reverseLookup[lookupString];
				output += letterCorr;
        } 
      }
	}

	//return output
		//when encoding, your output should still be as string
	return output;


  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
