import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Forget from './pages/forget'
import Contact from './pages/contact'
import ProjectTypePage from './pages/ProjectTypePage'


function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:type" element={<ProjectTypePage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
  )
}

export default App
