const reactElement = {
    type:'a',
    props:{
       href:'https://google.com',
       target:'_blank'
    },
    children:'Click me to visit google'
}//this kind of conversion of elemets happens from app.jsx into main.js in react , when we pass direct html in component function

function customRender(srcEle,destEle){
    let attrs = Object.entries(srcEle.props)
    
    let newElement = document.createElement(srcEle.type)
    for (const attr of attrs) {
        if (attr === 'children') continue;
        newElement.setAttribute(...attr)  
    }
    newElement.innerHTML = srcEle.children
    destEle.appendChild(newElement)
}

const root = document.getElementById('root')

customRender(reactElement,root)