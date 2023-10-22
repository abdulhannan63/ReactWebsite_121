import React from 'react'

import web from "./images/home.jpeg.jpg"
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common
    name='Grow You Knowledge With Us'
    page="About" linknm="Get Started"
    visit='/Service'
    imgsrc={web}
    />
        </>
    )
}

export default Home