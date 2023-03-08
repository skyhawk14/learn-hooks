/* What is currying?
In simple terms, in currying we return a function for each function invoked which excepts next argument inline. With the help of currying we can transform a function with multiple arguments into a sequence of nesting functions.
*/

function sum(...args){
    return function(...args1){
        // console.log(args.length)
        let arr = [...args, ...args1]
        let sumValue = arr.reduce((prev,v)=>prev+v, 0)
        if(args1.length===0){
            return  args.length===1 ? args[0] : sumValue
        }
        
        return sum(sumValue)
    }
}

//variations of currying
console.log(sum(1)(2)(3)())
console.log(sum(1, 2)(3)())
console.log(sum(1)(2, 3)())
console.log(sum(1, 2, 3)())
