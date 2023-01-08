class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        
        row = len(grid);
        col = len(grid[0]);

        size = [0];

        def dfs(r,c,grid):
            
            if r < 0 or c < 0 or r > row-1 or c >col -1 or grid[r][c] == 0:
                return 0;
            
            grid[r][c] = 0;
            
            return (1+dfs(r+1,c,grid)+dfs(r-1,c,grid)+dfs(r,c+1,grid)+dfs(r,c-1,grid));
            
        for i in range(row):
            for j in range(col):
                if grid[i][j] == 1:
                    size.append(dfs(i,j,grid))
        return max(size)
