"use client"

import Link from 'next/link';
import styles from './header.module.scss';
import { BsMusicNote } from 'react-icons/bs';
import { RiAlbumFill } from 'react-icons/ri';
import { BiLogoSpotify } from 'react-icons/bi';

import { useState } from "react";

export default function Header() {
    const [selectedMenu, setSelectedMenu] = useState();

    const menuLinks = [
        {
            href: "/Artists",
            label: (
                <>
                    <BsMusicNote /> Artists
                </>
            )
        },
        {
            href: "/Albums",
            label: (
                <>
                    <RiAlbumFill /> Albums
                </>
            )
        },
        {
            href: "#",
            label: (
                <>
                    <BiLogoSpotify /> Spotify
                </>
            )
        },
    ]

    const handleMenuSelection = (index) => {
        console.log(index)
        setSelectedMenu(index)
    }

    const handleLogoClick = () => {
        setSelectedMenu(null);
    };

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} href="/" onClick={handleLogoClick}>miniCLONE</Link>
            <nav>
                <ul>
                    {menuLinks.map((menu, index) => (
                        <li key={index} onClick={() => handleMenuSelection(index)}>
                            <Link className={selectedMenu === index ? styles.selectedMenu : null} href={menu.href}>{menu.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </nav>
    );
}
