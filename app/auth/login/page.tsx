import React from 'react'
import googleicon from "../../assets/googleicon.svg"
import Image from 'next/image'

const Login = () => {
    return (
        <div className='flex-col  '>
            <h1 className='flex justify-center'>Login</h1>
            <div className='flex justify-center'>
                <div className='bg-white rounded-lg shadow-xl p-5 flex flex-col items-center'>
                    <div className='card flex flex-col'>
                        <input className="border-b-2 border-black mt-3" type="text" placeholder='Name' />
                        <input className="border-b-2 border-black mt-3" type="text" placeholder='Email' />
                        <input className="border-b-2 border-black mt-3" type="password" placeholder='Password' />
                        <input className="border-b-2 border-black mt-3" type="password" placeholder='Confirm Password' />
                        <button className='mt-3'>Submit</button>
                    </div>
                    <p className='flex justify-center'>or</p>
                    <p>Sign in with</p>
                    <div className='flex mt-5'>
                        <ul >
                            <li>
                                <a href='/api/auth/signin'>
                                    <Image
                                        priority
                                        src={googleicon}
                                        alt="Follow us on Twitter"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
