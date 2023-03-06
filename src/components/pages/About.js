import React from 'react'
import AboutNave from '../AboutUsComponents/AboutNave'
import AboutBanner from '../AboutUsComponents/AboutBanner'
// import StaffSection from '../AboutUsComponents/StaffSection'
// import WhoWeAre from '../AboutUsComponents/WhoWeAre'
import SeeOurPeople from '../AboutUsComponents/SeeOurPeople'
import Footer from '../Footer'
import HomeValue from '../HomeComponents/HomeValue'

function About() {
    return (
        <div>
          
            <AboutNave/>
            <AboutBanner/>
            <HomeValue/>
            {/* <WhoWeAre/> */}
            <SeeOurPeople/>
            {/* <StaffSection/> */}
            <Footer/>
        </div>
    )
}

export default About
