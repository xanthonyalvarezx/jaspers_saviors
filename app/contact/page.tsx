'use client'
import React from 'react'

export default function contactComponent() {


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData)
        console.log(data)

    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='bg-white flex flex-col w-72 h-96 p-5 items-around justify-between rounded-lg shadow-lg'>
                <h2 className='text-center'>Contact Us</h2>
                <input type="text" className="shadow-xl rounded-lg" placeholder="Name" name="name" />
                <input type="text" className="shadow-xl rounded-lg" placeholder="Email" name="email" />
                <textarea id="messageText" name="messageText" rows={5} className="shadow-xl rounded-lg" placeholder='Add your message...' />
                <button type="submit">Sumbit</button>
            </form>
        </div>
    )
}


