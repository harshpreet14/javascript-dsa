//Brute force 
//create a visited array to keep a track if this element has been matched and added
// to the intersection array
//if it matches and vis.indexOf(arr[i]) ==0, add it 
//also remember that it is a sorted array, so if arr[i] > brr[j], break out of the loop

//Time Complexity => O(n*m) => O(n2)
//Space Complexity => worst case // O(n+m) + O(m)

var intersection = function(arr, brr) {
    const n= arr.length
    const m = brr.length
    let res = []
    let vis = new Array(m).fill(0)
  
    for(let i=0; i<=n; i++){
  
      for(let j=0; j<=m; j++){
        if(arr[i] == brr[j] && vis[j] ==0){
          res.push(arr[i])
          vis[j] = 1;
          break;
        }
  
        else if(brr[j] > arr[i]){
          break;
        }
      }
  
    }
    
    
    return res;
    
  
  };
  
  console.log(intersection([0, 1, 2, 3, 3, 4, 6 ], [0, 3, 3, 4, 5, 6, 7]))
  
  //Optimal approach
  //Since the arrays are sorted, lets use two pointers
  
  //TC => O(n*m)
  //SC => O(n+m)
  
  var intersection = function(arr, brr) {
    const n= arr.length
    const m = brr.length
  
    let res=[];
    
    let i=0
    let j=0
    while(i<n && j<m){
      if(arr[i] == brr[j]){
        res.push(arr[i])
        i++
        j++
      }
      if(arr[i] < brr[j]){
        i++;
      }
      if(brr[j] < arr[i]){
        j++
      }
    }
    
    
    return res;
    
  
  };
  
  console.log(intersection([0, 1, 2, 3, 3, 4, 6 ], [0, 3, 3, 4, 5, 6, 7]))