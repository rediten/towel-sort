
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) return [];
    for (let k = 0; k < matrix.length; k++) {
      if (k % 2 !== 0) matrix[k].reverse();
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    }
    return arr;
}
