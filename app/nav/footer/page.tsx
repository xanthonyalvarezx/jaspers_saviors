import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/jasperssaviorslogo2.png'
import Link from 'next/link'
import facebook from "../../assets/facebook_logo.svg"
import insta from "../../assets/insata_logo.png"
import tiktok from "../../assets/tiktok_logo.svg"
const footer = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <Image
                    src={Logo}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />
            </div>
            <div className=' flex px-5 w-11/12 justify-around '>
                <ul>
                    <li><Link href="/">Contact</Link></li>
                    <li><Link href="/">Donate</Link></li>
                    <li><Link href="/">About Jasper&#39;s Saviors</Link></li>
                </ul>
                <ul>
                    <li><Link href="/">Contact</Link></li>
                    <li><Link href="/">Donate</Link></li>
                    <li><Link href="/">About Jasper&#39;s Saviors</Link></li>
                </ul>
                <div className=' shadow-lg w-1/4 flex text-white flex-col p-5 items-center bg-black rounded-lg'>
                    <label className="text-center" htmlFor="newsletter">Stay up to date with our monthly newsletter. Events, raffles and more...</label>
                    <input className='rounded-lg px-3 mt-3' type="text" name="newsletter" placeholder='Email' />
                </div>
                <div>
                    <h3 className='flex justify-center'>Follow us!</h3>
                    <ul className='flex'>
                        <li className='mx-2'><Link href="/"> <Image
                            src={facebook}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        /></Link></li>
                        <li className='mx-2'><Link href="/"> <Image
                            src={insta}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        /></Link></li>
                        <li className='mx-2'><Link href="/"> <Image
                            src={tiktok}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer
