// Sampling function in JavaScript
// https://learnersbucket.com/examples/interview/sampling-function-in-javascript/
function message(inp){
  console.log("hello", inp);
}

const sample = sampler(message, 4);
sample("world");
sample("world");
sample("world");
sample("world");// this will be executed
sample("world");
sample("world");
sample("world");
sample("world"); // this will be executed

function sampler(fn, countLimit, context){
    let counter = 0
    return function(...args){
        context = this ?? context;
        counter++
        if(counter===countLimit){
            counter = 0
            fn.apply(context, args)
        }
    }
}