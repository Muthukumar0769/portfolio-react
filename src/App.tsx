
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Contact } from './pages/Contact';

function App() {

  return (
<>
  <BrowserRouter>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}>
      <Route path=":id" element={<ProjectDetails/>}/></Route>
      <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
