
import { ToastContainer } from 'react-toastify'
import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Academic from './Component/Academic/Academic'
import ContactSection from './Component/Contact/Contact'
import Hero from './Component/Hero/Hero'
import Projects from './Component/Projects/Projects'
import Skills from './Component/Skills/Skills'
import Footer from './Component/Footer/Footer'
import StarBorder from './Component/ReactBits/StarBorder/StarBorder'



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
        {/* <Skills></Skills> */}
        <StarBorder
  as="button"
  className="custom-class"
  color="red"
  speed="15s"
  thickness={10}
>
  <Skills></Skills>
</StarBorder>
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
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
