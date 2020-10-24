// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix === []) {
        return [];
    } else {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i]);
            if (i % 2 === 0) {
                arr = [...arr, ...matrix[i]];
            } else {
                arr = [...arr, ...matrix[i].reverse()];
            }
        }
        return arr;
    }
};
