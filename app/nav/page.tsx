import Link from 'next/link'
import React from 'react'
import styles from './nav.module.css'
import Image from 'next/image'
import Logo from '../assets/jasperssaviorslogo2.png'
const Navbar = () => {
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
                    <h3><li><Link className={styles.navlink} href='/'>DONATE</Link></li></h3>
                    <h3><li><Link className={styles.navlink} href='/'>CONTACT</Link></li></h3>
                    <h3><li><Link className={styles.navlink} href='/'>ABOUT JASPERS SAVIORS</Link></li></h3>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
