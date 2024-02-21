
//TC => 0(N2)
//SC => O(1)
  
for(let i=0; i<=n-1; i++){
    let counter = 0;
    for(let j= 0; j<=n-1; j++){
      if(arr[i] == arr[j]){
        counter++;
      }
    }
    if(counter == 1){
      return arr[i]
    }
  } 
}

console.log(find([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6,]))

//Better approach
//TC => O(N + N/2)
//SC => O(n+1/2 + 1)

var find = function(arr) {
  const n= arr.length;

  let hash = new Array((n+1)/2 + 1).fill(0)
  
  
  for(let i=0; i<=n-1; i++){
    hash[arr[i]] += 1
  }

  for(let i =0; i<= hash.length -1; i++){
    if(hash[i] == 1){
      return i;
    }
  }
};

console.log(find([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6,]))


//TC => O(N)
//SC => O(1)

//Brute force
var find = function(arr) {
  const n= arr.length;

  let res = 0;

  
  for(let i=0; i<=n-1; i++){
    res = res ^ arr[i]
  }

  return res
};

console.log(find([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6,]))

