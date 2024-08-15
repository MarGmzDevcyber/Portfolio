import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Education from './components/education/Education'
import Services from './components/services/Services'
import Projects from './components/projects/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Education />
        <Services />
        <Projects/>
        <Contact />
        <Footer/>
    </>
  )
}

export default App