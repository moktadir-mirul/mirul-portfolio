
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Academic from './Component/Academic/Academic'
import ContactSection from './Component/Contact/Contact'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Projects/Projects'
import Skills from './Component/Skills/Skills'


function App() {


  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section id='about'>
        <AboutMe></AboutMe>
      </section>
      <section id='skills'>
        <Skills></Skills>
      </section>
      <section >
        <Academic></Academic>
      </section>
      <section id='projects'>
        <Projects></Projects>
      </section>
      <section id='contact'>
        <ContactSection></ContactSection>
      </section>
    </div>
  )
}

export default App
