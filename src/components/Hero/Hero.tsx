"use client";
import styles from "./hero.module.css";
// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import SimpleBtn from "../Buttons/SimpleBtn";

const Hero = () => {
  useEffect(() => {
    new Typewriter("#typingEffect", {
      strings: ["Debit Card", "PayPal", "Credit Card"],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div className={styles.hero}>
      <h1 className={styles.headline}>
        HAVE YOU EVER WANTED A PRODUCT BUT DIDN'T HAVE A{" "}
        <span id="typingEffect">DEBIT CARD !!</span>
      </h1>
      <div className={styles.btns}>
        <SimpleBtn>Contact Us</SimpleBtn>
        <SimpleBtn>Get Started</SimpleBtn>
      </div>
    </div>
  );
};

export default Hero;
