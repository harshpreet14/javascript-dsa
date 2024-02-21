///BRute force appraoch
// TC => O(n*n)
//SC => O(1)

var findLength = function(arr, k) {
    const n= arr.length;
  
    let len = 0;
    
    for(let i = 0; i<=n-1; i++){
      let sum = 0;
      for(let j = i; j<= n-1; j++){
        sum = sum + arr[j];
        if(sum == k && (Math.abs(j-i) + 1) > len){
          len =  Math.abs(j-i) + 1;
        }
      }
    }
  
    return len
  
  };
  
  console.log(findLength([1, 2, 1, 1, 1, 2, 3, 2], 3))