import React from 'react'
import MainServicePageBanner from '../OurServices/MainServicePageBanner'
import MainServicePageNavBar from '../OurServices/MainServicePageNavBar'
import OurServiceList from '../OurServices/OurServiceList'
import OurProcess from '../OurServices/OurProcess'
import Footer from '../Footer'

function OurServices() {
    return (
        <div>
            <MainServicePageNavBar/>
            <MainServicePageBanner/>
            <OurServiceList/>
            <OurProcess/>
            <Footer/>

        </div>
    )
}

export default OurServices
