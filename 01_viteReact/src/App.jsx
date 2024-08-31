import Chai from './chai.jsx'
function App() {
  let username = "vedant"
  return(
    <>
    <Chai/>
    <h1>Hello React {username}</h1>
    {/* this is how to include js in jsx part(html part) */}
    {/* here {username} is already evaluated javascript expresion  , bcz we cannot try to evaluate directly inside {} lime if else etc, bcz jsx allows you to write html inside js , so then react needs to convert that html returned by the compinent function into html, so it convert all html data into object like in main.jsx file, then render method converts all them into html elments by documnt to create and using other mthods, so we are passing {username} inside html tag in jsx, so after all tagname,props,inner text and then at last after all info gathered to form actual html tag, then atlast these variable injection happends direclty, that why we give already evaluated expression of js instead of evaluating them inside*/}
    </>
  )
}

export default App
