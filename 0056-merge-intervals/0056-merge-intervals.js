/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    // 시작값 기준 정렬
    intervals.sort((a, b) => a[0] - b[0]);
    
    // tmp를 첫 번째 구간의 복사본으로 초기화
    let tmp = intervals[0].slice();
    let result = [];
    
    for (let i = 1; i < intervals.length; i++) {
        // 구간이 겹치면 병합
        if (tmp[1] >= intervals[i][0]) {
            tmp[0] = Math.min(tmp[0], intervals[i][0]);
            tmp[1] = Math.max(tmp[1], intervals[i][1]);
        } else {
            result.push(tmp);
            // 다음 구간의 복사본으로 업데이트
            tmp = intervals[i].slice();
        }
    }
    
    result.push(tmp);
    return result;
};