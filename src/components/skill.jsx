import user from "../assets/user.svg"
import interactive from "../assets/interactive.svg"
import responsive from "../assets/responsive.svg"

export default function Skill() {
  return (
    <section className="skillSection">
            <div className="skill-card">
                <img src={user} alt="" />
                <h6>User Friendly</h6>
            </div>
            <div className="skill-card">
                <img src={interactive} alt="" />
                <h6>Interactive Design</h6>
            </div>
            <div className="skill-card">
                <img src={responsive} alt="" />
                <h6>Responsive Design</h6>
            </div>
    </section>
  )
}
