// 5. Longest Palindromic Substring
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let sArray = s.split('')
	let longestPalindromeString = ''
	let longestPalindromeStringsArray = []
	let tempString = ''
	let longestPalindromeStringLength = 0
	for (let i = 0; i < sArray.length; i++) {
		for (let j = i; j < sArray.length; j++) {
			tempString += sArray[j]
			if (tempString === reverseString(tempString)) {
				if (tempString.length > longestPalindromeStringLength){
					longestPalindromeStringLength = longestPalindromeString.length
					longestPalindromeString = tempString
					longestPalindromeStringsArray.push(longestPalindromeString)
				} 
			}
		}
		tempString = ''
	}
	return longestPalindromeString
};

function reverseString(s) {
	let newStringArray = []
	let oldStringArray = s.split('')
	for (let i = oldStringArray.length - 1; i >= 0; i--) {
		newStringArray.push(oldStringArray[i])
	}
	return newStringArray.join('').toString();
}

console.log(longestPalindrome('abcba'))
