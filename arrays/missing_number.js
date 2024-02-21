//Brute force 
//TC=> O(n*n)
//SC=> O(1)

var missing = function(arr) {
    const n= arr.length
  
    for(let i=1; i<=n; i++){
      let isPresent = false
      for(let j=0; j<=n-1; j++){
        if(arr[j] == i){
          isPresent = true;
          break;
        }
      }
      if(isPresent == false){
        return i;
      }
    }
  
  };
  
  console.log(missing([1, 2, 3, 4, 6, 7]))
  
  //Better approach
  //TC=> O(n+n)
  //SC=> O(n)
  
  var missing = function(arr) {
    const n= arr.length;
  
    let hash = new Array(n+1).fill(0)
  
    for(let i=0; i<=n; i++){
      hash[arr[i]] = 1;
    }
  
    for(let i=1; i<=n; i++){
      if(hash[i] == 0){
        return i
      }
   }
  };
  
  console.log(missing([1, 2, 3, 4, 5, 6, 8]))
  
  //Optimal Approach
  //using sum
  //TC=> O(n)
  //SC=> O(1)
  
  
  var missing = function(arr) {
    const n= arr.length;
  
    const sum = (n+1)*(n+2)/2;
  
    console.log(sum)
    
    let sum2 = 0;
    for(let i=0; i<=n-1; i++){
      sum2 = sum2 + arr[i]
    }
    console.log(sum2)
   return sum-sum2;
  };
  
  console.log(missing([1, 2, 4, 5]))
  
  //using XOR