import '../App.css'
interface Props{
  skill:string;
  percent:number;
}
export const Skillbar = ({skill,percent}:Props) => {
  return (
    <div className="skill">
      <p>{skill}</p>
      <div className="progress">
        <div className="progressFill" style={{width:`${percent}%`}}>
        </div>
      </div>
    </div>
  )
}
