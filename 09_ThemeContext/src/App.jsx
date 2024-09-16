import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Toggle from './Components/toggle'
import ThemeProvider from './ThemeContext/theme'
function App() {
  const [theme, settheme] = useState("light")
  const setDark=()=>{
    settheme("dark")
  }
  const setLight=()=>{
    settheme("light")
  }
  useEffect(() => {
   document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(theme)
  }, [theme])
  
  return (
    <>
        <ThemeProvider value={{theme,setLight,setDark}}>
            <div className='w-screen h-screen bg-slate-300 flex justify-center items-center flex-col dark:bg-slate-900'>
                <Toggle/>
                <Card/>
            </div>
        </ThemeProvider>
    </>
  )
}

export default App
