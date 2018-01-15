/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	if (nums1.length === 0 && nums2.length === 0) {
		return 
	}
	if (nums1.length >= nums2.length )
		return calculation(nums1, nums2)
	else 
		return calculation(nums2, nums1)
};

function calculation(longerArray, shorterArray) {
	for ( var i = 0; i < shorterArray.length; i++ ) {
		if (shorterArray[i] < longerArray[0])
			longerArray.unshift(shorterArray[i])
		else 
			longerArray.push(shorterArray[i])
	}
	longerArray.sort(function(number1, number2){
		return number1 - number2
	})
	if (longerArray.length % 2 !== 0) {
		return longerArray[(longerArray.length - 1)/2]
	} else {
		return (longerArray[longerArray.length/2] + longerArray[longerArray.length/2 - 1]) / 2
	}
}

