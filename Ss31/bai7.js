function fakeFind(arr, fn){
    let subArr = [];
    for(let index in arr){
        fn(arr[index], index);
        if(fn(arr[index], index) === true){
            subArr.push(arr[index]);
        }
    }
    console.log(subArr);
}



fakeFind([1,2,3,4], function(e, i) {
    if(e % 2 === 0) {
    return true;
    } else {
    return false;
    }
});

fakeFind([1,2,3,4], function(e, i) {
    if(e % 2 !== 0) {
    return true;
    } else {
    return false;
    }
});