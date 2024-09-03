import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
  const Data = useLoaderData()
    // const [Data,setData]= useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((data)=>data.json())
    //     .then((data)=>{
    //         setData(data)
    //         // console. log(data);
            
    //     })
    //     .catch((err)=>console.log(err)
    //     )
    // },[])
  return (
    <div className='p-4 bg-gray-500 text-white text-3xl text-center'>
      Github Followers: { Data.followers}
      <img src={Data.avatar_url} alt="github_profile" width={200} className='m-auto pt-10'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}


