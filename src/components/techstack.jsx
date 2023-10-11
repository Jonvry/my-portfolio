import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import express from "../assets/express.svg"
import mysql from "../assets/mysql.svg"
import Stack from "../assets/Stack.svg"
import tailwind from "../assets/tailwind.svg"
import nextjs from "../assets/nextjs.svg"

export default function Techstack() {
  return (
    <section className="techstackSection">
      <img className="Stack" src={Stack} alt="" />
         <div className="techStack-container">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={tailwind} alt="tailwind" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
          <img src={nodejs} alt="nodejs" />
          <img src={express} alt="express" />
          <img src={nextjs} alt="nextjs" />
          <img src={mysql} alt="mysql" />
         </div>
    </section>
  )
}
