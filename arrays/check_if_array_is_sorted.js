
//for an array to be sorted in non descending order, the current element has to be
//lesser than or equal to the next element
// we can simply traverse through the array to see if this holds


//edge case- no next element exists for the last element

function isSorted(arr){
    const n = arr.length;
  
    for(let i=0; i<=n-2; i++){
      
      if(arr[i] >= arr[i+1]){
        return false;
        break;
      }
      
    }
    return true;
  }
  
  const array = [1,5, 2, 3, 4,6]
  console.log(isSorted(array));