import Navbar from "./components/Navbar"
import { ScrollContainer } from "react-scroll-motion"
import Hero from "./components/Hero"
import About from "./components/About"
import Description from "./components/Description"
import AnimatedCursor from "react-animated-cursor"
import Skills from "./components/Skills"
import SkillsIcons from "./components/SkillsIcons"
import Projects from "./components/Projects"
import data from './projects-data.json'
import Ecommerce from "./components/Projects/Ecommerce"
import DisneyPlusClone from "./components/Projects/DisneyPlusClone"
import TodoApp from "./components/Projects/TodoApp"
import KronoRecords from "./components/Projects/KronoRecords"
import MoviesApp from "./components/Projects/MoviesApp"
import TravelsPage from './components/Projects/TravelsPage'
import Contact from "./components/Contact"
import ContactForm from "./components/ContactForm"
import SocialMedia from "./components/SocialMedia"
import Regards from "./components/Regards"


function App() {

  const projectsData = data

  //TODO - agregar pantalla mientras carga la página
  return (
    <div className="App bg-black">
      <AnimatedCursor innerSize={30}
        outerSize={30}
        color={'243, 219, 199'}
      />
      <div className="fixed bg-noise opacity-8 divide-opacity-5 h-full w-full">
      </div>
      <Navbar />
      <ScrollContainer>
        <Hero/>
        <About/>
        <Description />
        <Skills />
        <SkillsIcons />
        <Projects/>
        <Ecommerce/>
        <DisneyPlusClone/>
        <TodoApp/>
        <KronoRecords/>
        <MoviesApp/>
        <TravelsPage/>
        <Contact/>
        <ContactForm/>
        <SocialMedia/>
        <Regards/>
      </ScrollContainer>
    </div>
  )
}

export default App
