import { Skillbar } from "../components/Skillbar"


export const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">Education</h2>
      <div className="about-container">
        <div className="education-box">
          <h3>10th Standard</h3>
          <p><strong>School:</strong> Wisdom Matric Higher Secondary School</p>
          <p><strong>Year:</strong> 2018 - 2019</p>
          <p><strong>Percentage:</strong> 84.2%</p>
        </div>
          <div className="education-box">
          <h3>12th Standard</h3>
          <p><strong>School:</strong> H.N.U.C Matric Higher Secondary School</p>
          <p><strong>Year:</strong> 2020 - 2021</p>
          <p><strong>Percentage:</strong> 88.2%</p>
        </div>
          <div className="education-box">
          <h3>B.Tech Information Technology </h3>
          <p><strong>College:</strong> Easa college of Engineering and Technology</p>
          <p><strong>Year:</strong> 2021 - 2025</p>
          <p><strong>CGPA:</strong> 80%</p>
        </div>
      </div>
      <h2 className="section-title">Skills</h2>

      <Skillbar skill="HTML" percent={90}/>
      <Skillbar skill="CSS" percent={90}/>
      <Skillbar skill="Javascript" percent={85}/>
      <Skillbar skill="TypeScript" percent={80}/>
      <Skillbar skill="React js" percent={85}/>
      <Skillbar skill="Node js" percent={85}/>
      <Skillbar skill="Express js" percent={85}/>
      <Skillbar skill="MySQL" percent={80}/>
    </div>
  )
}
