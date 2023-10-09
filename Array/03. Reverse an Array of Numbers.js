function solve(n,arr){
    let newArr = [];
     for (let i = 0; i < n;i++){
      
       newArr.push(arr[i])

    }
      let reverseArr = [];
{
       for (let k  = newArr.length - 1; k >= 0; k--) {
        reverseArr.push(newArr[k]);
        
       }
    console.log(reverseArr.join(' '))
      }
    }
    solve(5, [1,2,3,4,5])