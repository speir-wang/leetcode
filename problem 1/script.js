var twoSum = function(nums, target) {
	var number = []
	for (var i = 0; i < nums.length; i++) {
		var diff = target - nums[i]
    	if ( nums.includes(diff) && nums.indexOf(diff) !== i) {
    		number.push(i)
    		number.push(nums.indexOf(diff))
    		break
    	}
	}
	
    return number
}

twoSum([3,2,4], 6)

