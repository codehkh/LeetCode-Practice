/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = []
    intervals.push(newInterval)
    intervals.sort((a,b) => a[0] - b[0])
    
    if(intervals.length < 2){
        return intervals;
    }

    for(let i = 0; i<intervals.length; i++){
        let tmp = intervals[i];
        let j = i+1;
        while(intervals[j] && tmp[1] >= intervals[j][0]){
            tmp = [Math.min(tmp[0],intervals[j][0]), Math.max(tmp[1],intervals[j][1])];
            j++;
        }
        result.push(tmp);
        i = j - 1;

    }

    return result;



};