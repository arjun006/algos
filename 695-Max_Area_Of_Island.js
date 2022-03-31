//Max Area of Island -- DFS
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let currentArea = 0
    let row = grid.length
    let col = grid[0].length
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] == 1) {
                dfs(r, c)
                maxArea = Math.max(maxArea, currentArea)
                currentArea = 0
            }
        }
    }
    function dfs(r,c) {
        if (r >= row || r < 0 || c >= col || c < 0 || grid[r][c] == 0) return;
        grid[r][c] = 0
        currentArea++
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
        return
    }
    return maxArea
};