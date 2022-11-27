// 441. Arranging Coins

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
    let coins = 1;

    while(n > 0) {
        coins++;
        n = n - coins;
    }
    return coins - 1
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));