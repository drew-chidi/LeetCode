function vowelStrings(words: string[], queries: number[][]): number[] {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let prefix = new Array(words.length+1).fill(0)

    for(let i= 0; i<words.length; i++){
        let word = words[i]
        let startsWithVowel = vowels.has(word[0])
        let endsWithVowel = vowels.has(word[word.length-1])
        prefix[i+1] = prefix[i] + (startsWithVowel && endsWithVowel?1:0)
    }

    let result = []
    for (let [start, end] of queries){
        result.push(prefix[end+1]-prefix[start])
    }

    // const result = []
    // for (let i = 0; i<queries.length; i++){
    //     let count = 0
    //     for (let j = queries[i][0]; j<= queries[i][1]; j++){
    //         if (words.length>i[1]) continue;
    //         if(vowels.has(words[j][0]) && vowels.has(words[j][words[j].length-1])){
    //             count = count+1
    //             continue
    //         }

    //     }
    //     result.push(count);
    //     continue
    // }
    return result
};