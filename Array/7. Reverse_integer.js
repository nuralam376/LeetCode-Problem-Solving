// 7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let rev = 0;
    let xCopy = x;
    x = Math.abs(x);
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    let limit = Math.pow(2, 31);

    if(rev  > limit || rev < -limit) return 0;
    return xCopy < 0 ? -(rev) : rev;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));