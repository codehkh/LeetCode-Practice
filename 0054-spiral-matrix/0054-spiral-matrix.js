/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while(top <= bottom && right >= left){
        // ->
        for(let x = left; x <= right; x++){
            
            ans.push(matrix[top][x]);
        }
        top++;

        // |
        // v
        for(let y = top; y <= bottom; y++){
            
            ans.push(matrix[y][right]);
        }
        right--;

        // <-
        if(bottom >= top){
            for(let x = right; x >= left; x--){
                
                ans.push(matrix[bottom][x]);
            }
            bottom--;
        }


        //^
        //|
        if(right >= left){
            for(let y = bottom; y >= top; y--){
                
                ans.push(matrix[y][left]);
            }
            left++;
        }

    }

    return ans;
};