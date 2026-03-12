import { useState } from "react"
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import '../App.css'


export const Projects = () => {
  const [type, setType] = useState("frontend");
  const filtered = projects.filter(p => p.type === type)


  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projectBtns">
        <button
          className={type === "frontend" ? "active" : ""}
          onClick={() => setType("frontend")}>
          Frontend
        </button>

        <button
          className={type === "backend" ? "active" : ""}
          onClick={() => setType("backend")}
        >
          Backend
        </button>
        </div>

        <div className="projectGrid">

          {filtered.map(project => (

            <Link to={`/project/${project.id}`} key={project.id} className="projectCard">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <Link to={`/projectDetails/${project.id}`}>
                <button className="project-btn">View Details</button>
              </Link>




            </Link>

          ))}

        </div>

      </div>
    
  )
}
