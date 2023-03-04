import React from 'react'

const Container = ({ elem }) => {
    const htmlDecode = (input)=>{
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }
    console.log(elem)
    return (
        <div>Container</div>
    )
}

export default Container