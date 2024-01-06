'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    new Typewriter('#typingEffect', {
      strings: ['Debit Card', 'PayPal', 'Credit Card'],
      autoStart: true,
      loop: true
    });
  }, []);

  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.hero}>
        <h1 className={styles.headline}>
          HAVE YOU EVER WANTED A PRODUCT BUT DIDN'T HAVE A <span id='typingEffect'>DEBIT CARD !!</span>
        </h1>
        <div className={styles.btns}>
          <button>Contact Us</button>
          <button>Get Started</button>
        </div>
      </div>
    </main>
  )
}
