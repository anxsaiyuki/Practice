var merge_sort = function(arr) {
	var len = arr.length;
  if (len < 2) {
  	return arr
  }
  
  var half = parseInt(len / 2);
  var left = arr.splice(0, half);
  var right = arr
  
  return merge(merge_sort(left), merge_sort(right));
}

var merge = function(left, right)
{
    var result = [];
    var len = left.length + right.length;
    
   	for (var i = 0; i < len; i++) {
    	if (left[0] <= right[0] || right[0] === undefined) {
      	result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    
    return result;
}
