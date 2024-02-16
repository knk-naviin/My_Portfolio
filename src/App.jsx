import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Goals from './components/achievement/goals'

const App = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
      <About />
      <Goals/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App