import { useState, useEffect } from 'react'
import bg from './assets/bg.webp'
import Card from './Components/Card'
import useCurrencyConverter from './hooks/useCurrencyConverter'
function App() {
  const [AmountFrom, setAmountFrom] = useState(1)
  const [AmountTo, setAmountTo] = useState(0)
  const [FromCurrency, setFromCurrency] = useState('usd')
  const [ToCurrency, setToCurrency] = useState('inr')
  const [AvailableCurrency,setAvailableCurrency] = useState([])
  const [DefaultCurrency, setDefaultCurrency] = useState('usd')
  const [SelectedCurrency, setSelectedCurrency] = useState('inr')
  let data = useCurrencyConverter(DefaultCurrency)
  
  useEffect(()=>{
        setAvailableCurrency(Object.keys(data))
    }, [data])
    
  function calculate(){
    setAmountTo(0)
    setAmountTo(Number(AmountFrom) * data[SelectedCurrency])
    
  }
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center relative flex-col ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',filter:'brightness(80%)'}}>
        <div className='h-96 w-5/12 bg-white/30 rounded-xl p-8 border border-gray z-0 relative flex flex-col gap-5' >
          <button className='w-20 h-10 bg-blue-600 absolute z-20 left-72 bottom-52 rounded-xl text-white text-xl '>swap</button>
          <div className='flex flex-col gap-5'>
            <Card label="From" AmountFrom={AmountFrom} setAmountFrom= {setAmountFrom} FromCurrency={FromCurrency} setFromCurrency={setFromCurrency} DefaultCurrency={DefaultCurrency} setDefaultCurrency={setDefaultCurrency} AvailableCurrency={AvailableCurrency}/>
            <Card label="To" AmountTo={AmountTo} ToCurrency={ToCurrency} setToCurrency={setToCurrency} AvailableCurrency={AvailableCurrency} SelectedCurrency={SelectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
          </div>
          <div className='flex flex-col mt-5'>
            <button className=' bg-blue-600 text-white text-xl font-bold text-center h-14 rounded-xl'
            onClick={()=>{calculate()}}
            >Convert Usd to InR</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
