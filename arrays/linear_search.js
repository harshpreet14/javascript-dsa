//return the 0-based index of the first occurence or last occurence in the array
//else return -1

var find = function(arr, k) {
    const n= arr.length
    
    for(let i=0; i<= n-1; i++){
      if(arr[i] == k){
        return i;
      }
    }
    return -1
  };
  
  console.log(find([1, 2, 0, 3, 0, 0, 4, 5, 6, 0, 7], 6))