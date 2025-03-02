'use client'

import Link from 'next/link'
import React from 'react'
import styles from './nav.module.css'
import Image from 'next/image'
import Logo from '../assets/jasperssaviorslogo2.png'
import { useSession } from 'next-auth/react'
const Navbar = () => {
    const { status, data: session } = useSession();

    if (status === 'loading') return null;
    return (
        <div className='navbar p-3 m-3 position-static'>
            <nav className={styles.nav}>

                <ul className='flex justify-between'>
                    <Image
                        src={Logo}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                    <h3><li><Link className={styles.navlink} href='/'>HOME</Link></li></h3>
                    <h3><li><Link className={styles.navlink} href='/donate'>DONATE</Link></li></h3>
                    <h3><li><Link className={styles.navlink} href='/'>CONTACT</Link></li></h3>
                    <h3><li><Link className={styles.navlink} href='/'>ABOUT JASPERS SAVIORS</Link></li></h3>

                    <div className='flex flex-col items-center'>
                        {status === 'authenticated' &&
                            <div className={styles.user}>
                                <Image
                                    className='rounded-full h-11 w-11'
                                    src={session.user!.image}
                                    width={100}
                                    height={1}
                                    alt="your profile photo"
                                />
                                {session.user!.email}
                                <Link className={styles.navlink} href='/api/auth/signout'>Sign Out</Link>
                            </div>}
                        {status === 'unauthenticated' && <h4><li><Link className={styles.navlink} href='/api/auth/signin'>Login</Link></li></h4>}
                        {status === 'unauthenticated' && <li><sub className='text-white'>Not registered? <Link className={styles.navlink} href='/auth/register'>sign up here!</Link></sub></li>}
                    </div>
                </ul>
            </nav>
        </div >
    )
}
export default Navbar
