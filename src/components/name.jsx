import fb from "../assets/facebook.svg"
import ig from "../assets/instagram.svg"
import github from "../assets/github.svg"
export default function Name() {
  return (
    <section className="nameSection">
        <div className="heading">
            <h4>Hello! I'm,</h4>
            <h1>Jon Albert</h1>
            <h2>Front-End</h2>
            <h2>Web Developer</h2>
        </div>
        <div className="socialIcon">
            <a href="http://facebook.com/scoutalbertvirrey"
              target="_blank"  
              rel="noopener noreferrer">
              <img src={fb} alt="" />
            </a>
            <a href="http://instagram.com/jonvryx" 
              target="_blank" 
              rel="noopener noreferrer">
              <img src={ig} alt="" />
            </a>
            <a href="http://github.com/Jonvry" 
              target="_blank" 
              rel="noopener noreferrer">
                <img src={github} alt="" />
            </a>
        </div>
    </section>
  )
}
