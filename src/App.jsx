  import Navbar from './section/Navbar'
  import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Footer from './section/Footer'
  const App = () => {
    return (
      <div className="container mx-auto max-w-7xl">
      <Navbar />
     <Hero />
     <About />
     <Projects/>
     <Contact/>
      <Footer />  
      </div>
    )
  }

  export default App