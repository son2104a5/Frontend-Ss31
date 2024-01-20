function findLongestWordLength(s){
    let count = [];
    let longest,find;
    let words = s.split(' ');
    for(let i=0;i<words.length;i++){
        count.push(words[i].length);
    }
    longest = count[0]
    for(let i=0;i<count.length;i++){
        if(count[i]>longest){
            longest = count[i];
            find = i;
        }
    }
    console.log(`["${words[find]}",${longest}]`)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");