function chunkArrayInGroups(arr, n){
    let t = n, j = 0;
    let sArr = [];
    for(let i=0;i<arr.length;i+=n){
        let subArr = [];
        t += i;
        while(j<t){
            if(arr[j]!==undefined){
                subArr.push(arr[j]);
            }
            j++;
        }
        sArr.push(subArr);
    }
    console.log(sArr);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(["a", "b", "c", "d"], 3);