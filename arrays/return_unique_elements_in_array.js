// 🔨 Brute force approach
// let's iterate over the array and add elements to a set, no duplicate elements
//would be added, and then make an array out of the set, and return 
//the length of the set. 

// Time Complexity => O(N+N) => O(2N)
// Space Complexity => O(N)

function removeDuplicates(arr){
    let newSet = new Set();
  
    const n = arr.length;
  
    for(let i=0; i<=n-1; i++){
      newSet.add(arr[i]);
    }
  
    let index = 0;
    for(value of newSet){
      arr[index] = value;
      index++;
    }
    
    
    return index;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6]))
  
  //OPTIMAL APPROACH
  //Let's use the two pointer approach
  //What we will do is keep the first pointer at 0, and the second one at i+1
  // and traverse the second pointer
  // and then we replace the i+1, with element not equal to element at ith position
  
  // Time Complexity => O(N)
  // Space Complexity => O(1)
  
  function removeDuplicates(arr){
    let i=0
  
    const n = arr.length
    
    for(let j=1; j<= n-1; j++){
      
      if(arr[i] !== arr[j]){
        arr[i+1] = arr[j]
        i++
      }
      
    }
    return i+1
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6]))
  