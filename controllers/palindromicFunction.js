function reverse(str) {
	const strLower = str.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z 0-9]/gi, "");
  let o = [];
  for (let i = 0, len = strLower.length; i <= len; i++)
  o.push(strLower.charAt(len - i));
  return o.join('');
}

function isPalindrome(word, words) {
return word === reverse(word) && !words.includes(word)
}

function getStringPalindrome(words) {
  let subStrings = [];
  let len = words.length;
  let output = [];
  for (let i = 0; i < len; i++) {
	   for(let j = 0; j < len - i; j++) {
		  let subString = words.substring(j, j + i + 1);
		  if(isPalindrome(subString, subStrings)) {
			  if (subString.length >= 2) {
					output.push(subString);
			  }
		  }
	  }
  }
  if (output.length > 0) {
	  return output;
  } else {
	  return "This is not a Palindrome String.";
  }
}

module.exports ={
	getStringPalindrome
}