import {React} from 'react'
import { useTheme } from '../ThemeContext/theme'

function Toggle() {
  const {theme,setDark,setLight} = useTheme()
  const handleTheme = ()=>{
    if(theme === 'light'){
      setDark()
    }else{
      setLight()
    }
  }
  return (
    <div className='text-black'>
      <input type="checkbox" name="" id="" checked={theme==="dark"} onChange={handleTheme}/>
    </div>
  )
}

export default Toggle
