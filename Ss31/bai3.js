function confirmEnding(s, ec){
    let words = s.split(' ');
    let end = words[words.length-1];
    let count=0, j = ec.length;
    for(let i=end.length-1;i>=end.length-ec.length;i--){
        j--;
        if(end[i]===ec[j]&&ec[j]!==undefined){
            count++;
        }   
    }
    console.log(count);
    if(count===ec.length){
        console.log(true);
    }else{
        console.log(false);
    }
}

confirmEnding('Hello world', 'world');
confirmEnding('Hello world', 'orld');
confirmEnding('Hello world', 'world2');