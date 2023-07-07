import html from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import express from "../assets/express.svg"
import mysql from "../assets/mysql.svg"
import Stack from "../assets/Stack.svg"

export default function Techstack() {
  return (
    <section className="techstackSection">
      <img className="Stack" src={Stack} alt="" />
         <div className="techStack-container">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={nodejs} alt="" />
          <img src={express} alt="" />
          <img src={mysql} alt="" />
         </div>
    </section>
  )
}
