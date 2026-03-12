import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import "../App.css";

export const ProjectDetails = () => {
  const { id } = useParams()

const project = projects.find(p => p.id === Number(id))

if(!project){
return <h2>Project Not Found</h2>
}

  return (
 <div className="projectDetails">
    <h1>{project.title}</h1>
     <img src={project.image} alt={project.title}/>
     <p>{project.description}</p>
     <h3>Technologies Used</h3>

     <ul>
       {project.technologies.map((tech,i)=>(
        <li key={i}>{tech}</li>
      ))}
     </ul>

        {project.link && (
      <a href={project.link} target="_blank">Visit Website</a>
)}

</div>
  )
}
