function truncate(s, n){
    let arr = [];
    let oStr;
    for(let i=0;i<s.length-n;i++){
        arr.push(s[i]); 
    }
    arr.push(' ...');
    oStr = arr.join('');
    console.log(oStr);
}

truncate("Hello world, I’m Peter", 11);
