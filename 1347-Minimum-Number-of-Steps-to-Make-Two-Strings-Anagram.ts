// Keep track of the characters of s that are not in t in steps
// Take note of repeated characters.
// For each character of s, check if it is in t and check if it is already registered in our hash set.
// If it is in the hash set, take not of the count, make sure you find the same amount of character in t and increase the count by 1
// if it doesn't satisfy the conditions above, increase number of steps by 1
// Return steps at the end

function minSteps(s: string, t: string): number {
    let steps = 0
    const countS = new Array(26).fill(0);
    const countT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++){
        countS[s.charCodeAt(i)-'a'.charCodeAt(0)]++
        countT[t.charCodeAt(i)-'a'.charCodeAt(0)]++
    }

    for(let i=0; i<26; i++){
        steps+=Math.abs(countS[i]- countT[i])
    }
    return Math.floor(steps/2)
};