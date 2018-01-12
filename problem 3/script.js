/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var resultString = ''
    var stringArray = s.split('')
    var max = 0

    if ( s.length === 0 ) {
    	return 0
    }
    for ( var i = 0; i < stringArray.length; i++) {
		resultString = resultString + stringArray[i]
    	for ( var j = i + 1; j < stringArray.length; j++) {
    		if ( resultString.indexOf(stringArray[j]) === -1 ) {
    			resultString = resultString + stringArray[j]
    		} else {
    			max = max > resultString.length ? max : resultString.length 
    			break
    		}
    	}
    	max = max > resultString.length ? max : resultString.length 
    	resultString = ""
    }  
    return max
};