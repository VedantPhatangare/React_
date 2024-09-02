import React from 'react'
import { useEffect,useState } from 'react'


const useCurrencyConverter = (currency) => {
    const [Data, setData] = useState({})
    
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((data)=>data.json())
        .then((data)=>{setData(data[currency])
                        console.log(data[currency])
                    }
        )
        .catch((err)=>console.log(err)
        )
    },[currency])
  return Data
}

export default useCurrencyConverter