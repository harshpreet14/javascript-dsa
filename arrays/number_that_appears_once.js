//TC => O(N)
//SC => O(1)


var find = function(arr) {
    const n= arr.length;
  
    let res = 0;
  
    
    for(let i=0; i<=n-1; i++){
      res = res ^ arr[i]
    }
  
    return res
  };
  
  console.log(find([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6,]))