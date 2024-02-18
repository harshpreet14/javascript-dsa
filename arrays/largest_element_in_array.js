// The brute force approach is to sort the array using Selection, Insertion
//or Bubble sort and get the last element of the array-
// Time Complexity = O(N2)
// Space Complexity = 1

// A better solution is to sort the array using Merge Sort, Quick sort and 
//get the last element
// Time Complexity = O(NlogN)
// Space Complexity = 1

//The most optimal solution,
// we know that in array, the largest element would exist,
//and lets assume it to be arr[0];
//and then we start traversing through the array, and check if the current 
//element is larger, 
//and if it is, then we replace the largest element with the current element


// Time Complexity => O(N)
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


