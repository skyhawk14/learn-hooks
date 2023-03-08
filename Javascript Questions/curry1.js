//https://learnersbucket.com/examples/interview/javascript-function-that-returns-sum-of-the-previous-values/
var prevSum = 0
function sum(inp){
    prevSum += inp
    console.log(prevSum)
    return prevSum
}
sum(5); // 5
sum(3); // 8
sum(4); // 12
sum(0); // 12
