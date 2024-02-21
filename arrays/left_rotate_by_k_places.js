//BRUTE FORCE APPROACH
//Time Complexity = O(k) + O(n-k) + O(k) => O(n+k)
//Space Complexity = 0(k)

function rotate(arr, k){

    const n= arr.length
    
    let temp =[];
    //adding k elements to temp
    for(let i=0; i<= k-1; i++){
       temp.push(arr[i]);
    }
  
    //shifting elements of the second part of array
    for(let i=k; i<=n-1; i++){
      arr[i-k] = arr[i];
    }
    //adding the temp elements back to array
    //let j=0;
    for(let i=n-k; i<=n-1; i++){
      arr[i] = temp[i-(n-k)] //temp[j]
          // j++;
    }
    return arr
  }
  
  console.log(rotate([1, 2, 3, 4, 5, 6], 3)
  
  )
  
  //OPTIMAL SOLUTION
  //Time Complexity = O(k) + O(n-k) + O(n) => O(2n)
  //Space Complexity = 0(1)
  
  function rotate(arr, k){
  
    const n= arr.length
    
    //reverse the first half
    let i=0
    let j=k-1
    while(i<j){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp;
  
      i++;
      j--;
    }
    //revere the second half
    i=k
    j= n-1
    while(i<j){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp;
  
      i++;
      j--;
    }
  
    //reverse the entire array
    i = 0
    j = n-1
    while(i<j){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp;
  
      i++;
      j--;
    }
    
    return arr
  }
  
  console.log(rotate([1, 2, 3, 4, 5, 6], 3)) 