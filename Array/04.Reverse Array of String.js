function solve (arr){
    let rev = [];

    for (let i = arr.length - 1; i >= 0; i--) {
       
        rev.push(arr[i]);
    }

    console.log(rev.toString());
}
solve(["A","b", "c", "d"])