import '../App.css'

interface Props{
title:string
url?:string
}

export default function ProjectCard({title,url}:Props){

return(

<div className="projectCard">

<h3>{title}</h3>

{url && (
<a href={url} target="_blank">
Visit Website
</a>
)}

</div>

)

}