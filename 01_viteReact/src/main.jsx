import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'
import React from 'react'

let username = "vedant"
const reactElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  "Click me to Open Google",username //variable injection at last, which was included in jsx using {}
)

const root = createRoot(document.getElementById('root'))
root.render(
  
    // <App />
    // {/* App()  */}
    // {/* <Chai/> */}
    reactElement
  
)
