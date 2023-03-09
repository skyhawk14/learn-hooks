// https://learnersbucket.com/examples/interview/currying-part-4/
function sum(a, b, c, d) {
    console.log(a,b,c,d)
  return a + b + c + d;
}
function curry(fn){
    return function(...args){
        // console.log(fn.length, args)
        if(args.length>=fn.length){
            return fn.call(null,...args)
        }
        let fnB = fn.bind(null, ...args)
        return curry(fnB)
    }
}

let curriedSum = curry(sum);

// console.log(curriedSum(1,2,3,4)); // 10
console.log(curriedSum(1)(2,3)(4,5)); // 10
console.log(curriedSum(1)(2,3)(4)); // 10