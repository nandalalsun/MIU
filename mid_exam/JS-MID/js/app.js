function findFirst(n, arr){
    let newArr = [];
    if(arr.length < n){
        window.alert("Error: Insufficient items");
    }
    else{
        for(let i = 0; i<n;i++){
            newArr.push(arr[i]);
    }
    return newArr;
}
}
console.log(findFirst(1, [1,2,3,4,5,6]));
