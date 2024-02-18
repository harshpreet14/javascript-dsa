
// if we use sorted arrays, then how to determine the second largest one
//TC=> O(N + NlogN)
function second(sortedArr){

	for(let i = n-2; i <=1; i--){

		if(arr[i] !== arr[n-1]){
			return arr[i];
			break;
		}
	}
	return null;
}

//Better approach => TC => O(N) + O(N) => O(2N)

function largestElement(arr){

	let largest = arr[0];

	const n = arr.length;

	for(let i=0; i<= n-1; i++){
		if(arr[i] > largest){
				largest = arr[i]
			}
	}
	
 return largest;
}

function secondLargest(arr, largest){

  let secondLargest = -1;

	const n = arr.length;

	for(let i=0; i<= n-1; i++){
		if(arr[i] != largest && arr[i] > secondLargest){
				secondLargest = arr[i];
			}
	}
	
 return secondLargest;
}

//edge case - when the first element is the largest itself;

function secondLargest(arr){

	let largest = 1 ; // keep it 1 or  keep it -inf
  let secondLargest = null;

	const n = arr.length;

	for(let i=0; i<= n-1; i++){
		if(arr[i] > largest){
				secondLargest = largest;
				largest = arr[i];
		}else if(arr[i] < largest && arr[i] > secondLargest){
				secondLargest = arr[i];
		}
	}
	
 return secondLargest;
}