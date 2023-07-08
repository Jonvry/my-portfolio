import Name from "./components/name"
import Project from "./components/project"
import About from "./components/about"
import Techstack from "./components/techstack"
import Skill from "./components/skill"
import Navbar from "./components/navbar"

export default function App() {
  // Array to store the IDs
  const elementIds = ["project", "about", "techStack", "skill"];
  return (
    <main className="main">
      <Navbar elementIds={elementIds} />
      <div className="name">
        <Name/>
      </div>
      <div className="project" id={elementIds[0]}> 
        <h3>Project</h3> 
        <Project/>
      </div>
      <small>Design & Build by:
          Jon Albert Virrey<br/> &copy; 2023
        </small>
      <div className="about" id={elementIds[1]}> 
        <h3>About</h3>
        <About/>
      </div>
      <div className="techStack" id={elementIds[2]}> 
        <h3>Tech Stack</h3>
        <Techstack/>
      </div>
      <div className="skill" id={elementIds[3]}>
        <h3>Skill</h3>
        <Skill/>
       </div>
    </main>
  );
}
