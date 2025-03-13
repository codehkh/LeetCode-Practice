/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    function dfs(i,j,index){

        if(index === word.length) return true;
        if(i >= m || i < 0 || j >=n || j <0 ) return false;
        if(board[i][j] !== word[index]) return false;

        const tmp = board[i][j];
        board[i][j] = '#';

        const found = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1);

        board[i][j] = tmp;

        return found 
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(dfs(i,j,0)) return true;
        }
    }

    return false;
};