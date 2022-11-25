//  744. Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length - 1;
    let mid, found = false;

    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        if(letters[mid] === target) {
            found = true;
            break;
        } else if(letters[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    if(found && letters[mid + 1] === target) {
        for(let i = mid + 1; i < letters.length; i++) {
            if(letters[i] > target) {
                return letters[i];
            }
        }
    } else if(found && letters[mid + 1] > target) {
        return letters[mid + 1];
    } else if(start > end && letters[start]) {
        return letters[start];
    } 
    return letters[0];
};

console.log(nextGreatestLetter(["c","f","j"], "d"));
console.log(nextGreatestLetter(["c","f","j"], "a"));
console.log(nextGreatestLetter(["c","f","j"], "c"));
console.log(nextGreatestLetter(["x","x","y","y"], "z"));
console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"], "e"));