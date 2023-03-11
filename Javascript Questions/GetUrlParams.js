// https://learnersbucket.com/examples/javascript/how-to-get-url-parameter-using-javascript/
function getParams(url){
    let anchorElement = document.createElement('a')
    anchorElement.href = url
    debugger
    console.log(anchorElement)
    let queryParamsString= anchorElement.search.substring(1)
    let params = queryParamsString.split('&').map(v=>{
        return decodeURIComponent(v).split('=')
    }).reduce((acc, uri)=>{
        return {
            ...acc,
            [uri[0]]: uri[1]
        }
    },{})
    return params
}
let url = 'https://learnersbucket.com?datastructure=linked%10list&algorithm=array';
console.log(getParams(url));