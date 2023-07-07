import ProjectIMG from "../assets/mc.png";

export default function Project() {
  return (
    <section className="projectSection">
        <div className="sampleProject">
          <img src={ProjectIMG} alt="" />
          <div className="sp_Details">
            <h5>My Portfolio</h5>
          </div>
        </div>
    </section>
  )
}
