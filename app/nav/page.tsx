import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='p-3 m-3 position-static'>
            <nav>
                <ul className='flex justify-between'>
                    <Link href='/'>HOME</Link>
                    <Link href='/'>DONATE</Link>
                    <Link href='/'>CONTACT</Link>
                    <Link href='/'>ABOUT JASPERS SAVIORS</Link>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
