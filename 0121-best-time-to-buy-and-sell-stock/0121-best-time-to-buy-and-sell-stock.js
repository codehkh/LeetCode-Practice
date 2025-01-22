/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0;
    for(let i = 0; i< prices.length; i++){
        for(let j = i; j<prices.length; j++){
            let tmp = prices[j] - prices[i];
            if(profit < tmp)
            {

                profit = tmp
                
            }
        }
        
    }

    return profit
};