// 2108. Find First Palindromic String in the Array

const isPalindromic = (string) => {
    let firstPointer = 0;
    let lastPointer = string.length - 1;

    while(firstPointer <= lastPointer) {
        if(string[firstPointer] !== string[lastPointer]) {
            return false;
        }
        firstPointer++;
        lastPointer--;

    }
    return true;
}; 

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = function(words) {

    for(let i = 0; i < words.length; i++) {
        if(isPalindromic(words[i])) {
            return words[i];
        }
    }
    return "";
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));
console.log(firstPalindrome(["notapalindrome","racecar"]));
console.log(firstPalindrome(["def","ghi"]));