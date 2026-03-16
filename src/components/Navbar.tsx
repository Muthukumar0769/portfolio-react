import { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";


export const Navbar = () => {

  const [open, setOpen] = useState(false);




  return (
    <>
      <nav className="navbar">
        <h2>Muthukumar</h2>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="mobilebtn" onClick={() => setOpen(!open)}>☰</button>

      </nav>
      {open && (
        <div className={`sidebar ${open ? "showSidebar" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  )
}
