/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 },() => []);
    let cols = Array.from({ length: 9 },() => []);
    let boxes = Array.from({ length: 9 },() => []);

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                continue;
            }

            let value = board[r][c];
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].includes(value) || cols[c].includes(value) || boxes[boxIndex].includes(value)) {
                return false;
            }

            rows[r].push(value);
            cols[c].push(value);
            boxes[boxIndex].push(value);

        }
    }

    return true;    
};