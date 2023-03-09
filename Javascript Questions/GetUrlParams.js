// https://learnersbucket.com/examples/javascript/how-to-get-url-parameter-using-javascript/
function getParams(url){
    let anchorElement = document.createElement('a')
    anchorElement.href = url
    debugger
    console.log(anchorElement)
}
let url = 'https://learnersbucket.com?datastructure=linked%10list&algorithm=array';
console.log(getParams(url));