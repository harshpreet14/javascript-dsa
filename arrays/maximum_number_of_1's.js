var maximum = function(arr) {
    const n= arr.length;
  
    let max = 0
  
    let count =0
      
    for(let i=0; i<=n-1; i++){
      if(arr[i] === 1){
        count ++;
        if(count > max){
          max = count;
        }
      }else{
        count = 0;
      }
    }
    
   return max;
  };
  
  console.log(maximum([1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0]))