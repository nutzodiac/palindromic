const { json } = require("express/lib/response");

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
  let palinStringAll = [];
  let palinStringLongest = "", longestWord = 0;
  for (let i = 0; i < len; i++) {
	   for(let j = 0; j < len - i; j++) {
		  let subString = words.substring(j, j + i + 1);
		  if(isPalindrome(subString, subStrings)) {
			  if (subString.length >= 2) {
					palinStringAll.push(subString);
			  }
		  }
	  }
  }
  for (let k = 0; k < palinStringAll.length; k++) {
    if (longestWord < palinStringAll[k].length) {
      longestWord = palinStringAll[k].length;
      palinStringLongest = palinStringAll[k]
    }
  }
  if (palinStringAll.length > 0) {
	  return {"all": palinStringAll, "longest": palinStringLongest};
  } else {
	  return "This is not a Palindrome String.";
  }
}

module.exports ={
	getStringPalindrome
}