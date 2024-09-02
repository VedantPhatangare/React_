import React, { useState } from 'react'

const Card = ({ label,AmountFrom,setAmountFrom, AmountTo,AvailableCurrency=[] ,SelectedCurrency,setSelectedCurrency,setDefaultCurrency,DefaultCurrency}) => {


    

    return (
        <div className='bg-white z-10 h-28 px-3 py-1.5 rounded-lg  relative flex flex-row gap-1'>
            <div className='w-72 px-1 py-1.5 flex flex-col gap-5'>
                <div className='text-gray-400'>{label}</div>
                <input type="number" name="amount" className='ml-1 w-1/3 outline-none' id="" value={AmountFrom ? AmountFrom:AmountTo} onChange={(e)=>{setAmountFrom(e.target.value)}} />
            </div>

            <div className='w-72 text-right py-1 px-1.5 flex flex-col items-end gap-6'>
                <div className='text-gray-400'>Currency Type</div>
                <select name="Currencies" id="" className='w-20 h-8' value={SelectedCurrency? SelectedCurrency: DefaultCurrency} onChange={(e)=>{setSelectedCurrency?setSelectedCurrency(e.target.value) : setDefaultCurrency(e.target.value)}}>
                    {AvailableCurrency.map((country) => {
                         return <option key={country}>{country}</option>
                    })}
                </select>

            </div>
        </div>
    )
}

export default Card