import React from 'react'

function Card() {
    return (
        <>
            <div className='bg-white w-72 h-2/3 rounded-lg overflow-hidden font-bold text-xl dark:bg-black dark:text-white p-0.5'>
               
                    <img className='rounded-lg' src="https://images.pexels.com/photos/28314332/pexels-photo-28314332/free-photo-of-a-black-and-white-photo-of-a-man-leaning-on-his-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />

                <div className='text-center'>
                    Hello
                </div>
            </div>
        </>
    )
}

export default Card
