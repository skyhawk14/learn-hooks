// function friends(mapping, friendName){
//     let result = []
//     let q = [friendName]
//     let isVisited = new Map();
//     isVisited.set(friendName,true)
//     let helperMethod = ()=>{
//         if(q.length === 0) return
//         let friendName = q.shift()
//         console.log(friendName)
//         // isVisited.set(friendName,true)
//         for(let friend of (mapping[friendName]??[])){
//             console.log('inner',friend)
//             if(!isVisited.get(friend)){
//                 result.push(friend)
//                 q.push(friend)
//                 isVisited.set(friend, true)
//             }
//         }
//         return helperMethod()
//     }
//     helperMethod()
//     return result
// }

function friends(mapping, friendName) {
    let friendsList = mapping[friendName]
    if(friendsList){
        let friendsl = [...friendsList]
        for(let f of friendsList){
            friendsl.push(...friends(mapping,f))
        }
        return friendsl
    }
    return []
}
const mapping = {
  a: ['b', 'c'],
  b: ['d', 'g'],
  d: ['p', 'q'],
  l: ['x', 'y']
};

console.log(friends(mapping, 'a'));

var _regex = /{(?:{|%)\[\[REVIEW JINJA\]\].*?(?:%|})}/g;
let text = `{%[[REVIEW JINJA]] set firstName = userAttribute [ 'first_name' ] %}{% if firstName %}Hi {{ firstName | default: "" }},{% else %}Hi there,{% endif %}<br /><br />Text goes here</td>
{{[[REVIEW JINJA]]Mani}}`
var _match2 = _regex.exec(text);
console.log(!!_match2)
