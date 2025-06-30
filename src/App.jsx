
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Academic from './Component/Academic/Academic'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Projects/Projects'
import Skills from './Component/Skills/Skills'


function App() {


  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <AboutMe></AboutMe>
      </section>
      <section>
        <Skills></Skills>
      </section>
      <section>
        <Academic></Academic>
      </section>
      <section>
        <Projects></Projects>
      </section>
    </div>
  )
}

export default App
