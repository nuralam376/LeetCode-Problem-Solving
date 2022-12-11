// 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    let top = 0;
    let bottom = matrix.length - 1;
    let row;
    let lastIndex = matrix[0].length - 1;

    while(top <= bottom) {
        row = Math.floor((top + bottom) / 2);
        if(target > matrix[row][lastIndex]) {
            top = row + 1;
        } else if(target < matrix[row][0]) {
            bottom = row - 1;
        } else {
            break;
        }
    }
    if(!(top <= bottom)) {
        return false;
    }

    row = Math.floor((top + bottom) / 2);
    let left = 0;
    let right = matrix[0].length - 1;
    let mid;

    while(left <= right) {
        mid = Math.floor((left + right) / 2);

        if(target > matrix[row][mid]) {
            left = mid + 1;
        } else if(target < matrix[row][mid]) {
            right = mid - 1;
        } else {
            return true;
        }
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));