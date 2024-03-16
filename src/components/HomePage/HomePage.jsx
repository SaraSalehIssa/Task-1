import React from 'react'
import NavbarHomePage from '../NavbarHomePage/NavbarHomePage'
import Footer from '../Footer/Footer'
import Section1 from '../Sections/Section1'
import Section2 from '../Sections/Section2'
import Section3 from '../Sections/Section3'
import Section4 from '../Sections/Section4'
import Section5 from '../Sections/Section5'
import Section6 from '../Sections/Section6'

function HomePage() {
  return (
    <>
      <NavbarHomePage/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  )
}

export default HomePage