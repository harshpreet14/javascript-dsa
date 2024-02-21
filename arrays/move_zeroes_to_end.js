//BRUTE FORCE
//Time Complexity = O(n) + O(n-k) => O(2n-k)
//Space Complexity => O(n) worst case

function remove(arr){

    const n= arr.length
    
   //create a temp array and push non zero elements to it
    let temp =[]
    
    for(let i=0; i<= n-1; i++){
      if(arr[i] > 0){
        temp.push(arr[i])
      }
    }
  
   //calculate the length of temp array
    k = temp.length
  
   //push zeroes at the end of the temp array
    for(let i = k; i<= n-1; i++){
      temp[i] = 0;
    }
    
    return temp
  }
  
  console.log(remove([1, 2, 0, 3, 0, 4, 5, 0, 6]))
  
  //OPTIMAL APPROACH
  //we are already iterating in the array, let's use two pointers
  /* The first pointer j will point towards the elements which are 0, and I will find the
  first position of jth pointer by iterating over the array once.
  I will maintain the second pointer i starting from j+1 th index, and iterate it over the
  array.
  
  When the element at ith pointer will not be zero, then I will swap that element with the 
  0 element at jth pointer. 
  and then shift j to j+1t index */
  
  
  //Time Complexity = O(n) 
  //Space Complexity => O(1) 
  
  
  var remove = function(arr, k) {
      const n= arr.length
    
     //finding the first zero element
     let j=0;
     for(let i=0; i<= n-1; i++){
       if(arr[i]===0){
         j=i;
         break;
       }
     }
      // j stays at zero element and i stays at j+1
  // understand why j=>j+1
    for(let i=j+1; i<=n-1; i++){
      if(arr[i] !== 0){
        let temp = arr[i]
        arr[i] = 0
        arr[j] = temp;
        j++;
      }
    }
    return arr
  };
  
  console.log(remove([1, 2, 0, 3, 0, 0, 4, 5, 6, 0, 7]))
  