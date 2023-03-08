const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
     f: {
       g: -4,
      },
    },
    h: "Good Night Moon",
  },
};
const filter = (s) => typeof s === "string";

function filterNestedObject(ob, fn) {
    // console.log('Object', Object.keys(ob))
    const keys = Object.keys(ob)
    for(let key in keys){
        let a = keys[key]
        if(typeof ob[a] === 'object'  ){
            let last = ob[a]
           filterNestedObject(ob[a], fn)
           if(Object.keys(ob[a]).length===0){
                delete ob[a]
            }
            return
        }
        if(!fn(ob[a])){
            delete ob[a]
        }
    }
    
}
filterNestedObject(obj, filter)
console.dir(obj)
// for(let key in [1,2,3]){
//     console.log('key',[1,2,3][key])
// }

// Output:
// {
//   b: {
//     c: "Hello World",
//     h: "Good Night Moon",
//   }
// };