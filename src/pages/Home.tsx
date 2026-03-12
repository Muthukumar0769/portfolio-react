import profileImg from "../assets/profile.jpg"
import "../App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const Home = () => {

  return (

    <div className="home">

      {/* LEFT SIDE */}

      <div className="home-left">

        <h1>
          Muthu<span>kumar</span>
        </h1>

        <h3 className="role">Full Stack Developer</h3>

        <p className="home-desc">
          Aspiring Web Developer with a strong foundation in web development.
          Passionate about building efficient solutions and contributing to
          innovative projects in a dynamic organization.
        </p>

        <div className="home-buttons">

          <a
            href="https://drive.google.com/file/d/1DzHHss5GlQXnJpoLQ7j0Q2teNlNpW0Qp/view"
            target="_blank"
            rel="noreferrer"
          >
            <button className="resumeBtn">
              Download Resume
            </button>
          </a>

        </div>

        <div className="social-icons">

          <a href="https://www.linkedin.com/in/muthu-1857aa2b2" target="_blank"><button className="linked-btn"> <FaLinkedin /> Linked In</button></a>

          <a href="https://github.com/Muthu0708?tab=repositories" target="_blank"><button className="git-btn"><FaGithub /> GitHub</button></a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="home-right">

        <div className="profile-container">

          <img src={profileImg} alt="profile" />

        </div>

      </div>

    </div>

  )

}