import About from './components/About'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='bg-dark text-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
