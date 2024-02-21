//BRUTE FORCE APPROACH
// first iterate over these two arrays, make a set, and then back into array again
// need to sort the array again
//TC => O(n) + O(m) + O(n+m log(n+m))
// Sc => O(n+m)

var union = function(arr, brr) {
    const n= arr.length
    const m = brr.length
  
    const res = [];
    
    for(let i=0; i<= n-1; i++){
      if(res.indexOf(arr[i]) == -1){
        res.push(arr[i])
      }
    }
  
    for(let i=0; i<= m-1; i++){
      if(res.indexOf(brr[i]) == -1){
        res.push(brr[i])
      }
    }
  
    return res.sort()
    
  };
  
  console.log(union([1, 2, 3], [0, 4, 5, 6, 7]))
  
  //OPTIMAL APPROACH
  //using two pointer i, j at arr[0] and brr[0] and iterate over each filling the union
  // with smaller element and checking if it is there in the array, and moving pointer,
  //and when one of the array is over, iterate over the remaining part of second array
  
  // TC => O(N) + O(M)
  // SC => O(N+M)
  
  var union = function(arr, brr) {
    const n= arr.length
    const m = brr.length
  
    const res = [];
    let i = 0
    let j = 0
    while(i< n && j<m) {
      if(arr[i] < brr[j]){
        if(res.length == 0 || res.indexOf(arr[i]) == -1){
          res.push(arr[i])
        }
         i++;
      }else{
        if(res.length == 0 || res.indexOf(brr[j]) == -1){
          res.push(brr[j])
        }
        j++;
      }
    }
  
    while(i<= n-1){
      if(res.length == 0 || res.indexOf(arr[i]) == -1){
        res.push(arr[i])
      }
       i++;
    }
  
    while(j<= m-1){
      if(res.length == 0 || res.indexOf(brr[j]) == -1){
        res.push(brr[j])
      }
      j++;
    }
    
    return res;
    
  };
  
  console.log(union([1, 2, 3], [0, 4, 5, 6, 7]))