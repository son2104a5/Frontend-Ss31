function largestOfArrs(arr){
    let subArr = [];
    let max, arrS;
    for(let i=0;i<arr.length;i++){
        arrS = arr[i];
        max = arrS[0];
        for(let j=0;j<arrS.length;j++){
            if(arrS[j]>max){
                max = arrS[j];
            }
        }
        subArr.push(max);
    }
    console.log(subArr);
}

largestOfArrs([[1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]]);
largestOfArrs([[1, 2, 3, 4], [5, 1, 2, 9]]);