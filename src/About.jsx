import React from 'react'
import Common from './Common'
import web from "./images/home.jpeg.jpg"
const About = () => {
  return (
    <Common
    name='Welcome to'
    page="About" linknm="Contact Us"
    visit='/Contact'
    imgsrc={web}
    />
  )
}

export default About