// if arr = [1, 2, 3, 4, 5]
//then left rotated by one place means- [2, 3, 4, 5, 1]

//solve the problem in the given array, no extra space to be used
//Time Complexity =>O(N)
// SC=> O(1)

function rotate(arr){
    const temp = arr[0];
    const n = arr.length
  
    for(let i=1; i<=n; i++){
      arr[i-1] = arr[i]
    }
  
    arr[n-1] = temp;
  
    return arr
  }
  
  console.log(rotate([1, 2, 3, 4, 5]))