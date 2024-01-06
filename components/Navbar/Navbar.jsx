import React from 'react'
import Image from 'next/image'
import style from "./navbar.module.css"
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={style.navbar}>
        <div className={style.logo}>
          <img src='https://media.discordapp.net/attachments/1144663357845147790/1193119683474362389/Standard_Collection_6.png?ex=65ab8e4b&is=6599194b&hm=29aa6a97807942ad1cea8c6d4df7191894dc6a465d0e7faebefc480daa3b31ba&=&format=webp&quality=lossless&width=319&height=318'></img>
          <h1>Flexi-Pay</h1>
        </div>

        <div className={style.navitems}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About Us</Link>
          <button>Get Started</button>
        </div>
    </div>
  )
}
