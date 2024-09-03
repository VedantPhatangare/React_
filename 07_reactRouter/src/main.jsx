import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter,Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
  //   {
//     path: '/',
//     element: <Layout/>,
//     children:[
  //       {
    //         path:"",
//         element: <Home/>
//       },{
  //         path:"/about",
  //         element: <About/>
  //       },{
    //         path:"/user/:username",
    //         element:<User/>
    //       },
    //     ]
    //   }
// ])


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>} >
          <Route path="" element={<Home/>} ></Route>
          <Route path="about" element={<About/>} />
          <Route path="user/:username" element={<User/>} />
          <Route 
          loader={githubInfoLoader}
          path='github' 
          element={<Github/>}
          />
      </Route>
    )
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
