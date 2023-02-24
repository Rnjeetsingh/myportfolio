import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./pages/navbar.jsx"
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import AboutUs from './pages/about'
import 'font-awesome/css/font-awesome.min.css';
import Skills from './pages/skills'
import Githubs from './pages/githubs'


function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(function(){
    setLoading(false)
  },2000)


  return (
    <>
      <div className="App">
        <section></section>
        {
          loading ?             
              <h1>Loading...</h1> 
          :<>
              <Navbar />
              <Home />
              <AboutUs />
              <Skills />
              <Projects />
              <Githubs />
              <Contact />
            </>
          }
      </div>
    </>
  )
}

export default App
