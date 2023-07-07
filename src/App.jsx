import Name from "./components/name"
import Project from "./components/project"
import About from "./components/about"
import Techstack from "./components/techstack"
import Skill from "./components/skill"

export default function App() {
  return (
    <main className="main">
      <div className="name">
        <Name/>
      </div>
      <div className="project" id="project"> 
        <h3>Project</h3> 
        <Project/>
      </div>
      <small>Design & Build by:
          Jon Albert Virrey<br/> &copy; 2023
        </small>
      <div className="about" id="about"> 
        <h3>About</h3>
        <About/>
      </div>
      <div className="techStack" id="techStack"> 
        <h3>Tech Stack</h3>
        <Techstack/>
      </div>
      <div className="skill" id="skill">
        <h3>Skill</h3>
        <Skill/>
       </div>
    </main>
  )
}


