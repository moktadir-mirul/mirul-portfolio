
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Hero from './Component/Hero/Hero'
import NavBar from './Component/NavBar/NavBar'


function App() {


  return (
    <div>
      <NavBar></NavBar>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <AboutMe></AboutMe>
      </section>
    </div>
  )
}

export default App
