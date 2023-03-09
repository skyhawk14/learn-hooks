// https://learnersbucket.com/examples/interview/create-a-toggle-function-in-javascript/
let hello = toggle("hello");
hello() // "hello";
hello() // "hello";

let onOff = toggle("on", "off","test");
onOff() // "on"
onOff() // "off"
onOff() // "on"
onOff() 

function toggle(...args){
    const length = args.length
    let i = 0;
    return function(){
        console.log(args[i%length])
        console.log(i)
        i++;
        return args[i%length]
    }
}
