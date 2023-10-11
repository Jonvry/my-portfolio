import ProjectIMG from "../assets/mc.png";
import sampleProject from "../assets/sampleProject.png";
import link from "../assets/link.svg";

export default function Project() {
  return (
    <section className="projectSection">
        <div className="sampleProject">
          <img src={ProjectIMG} alt="portfolio" />
          <div className="sp_Details">
            <h5>My Portfolio</h5>
          </div>
        </div>

        <div className="sampleProject">
          <img src={sampleProject} className="ProjectIMG" alt="portfolio" />
          <div className="sp_Details">
            <h5>Landing Page</h5>
            <a href="https://lorembank.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={link} alt="link icon" /></a>
          </div>
        </div>
    </section>
  )
}
