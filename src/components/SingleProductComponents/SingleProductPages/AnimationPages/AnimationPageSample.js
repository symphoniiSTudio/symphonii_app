import React from 'react'
import SinglePageBanner from '../../SinglePageBanner'
import SinglePageNav from '../../SinglePageNav'
import Footer from '../../../Footer'
import AnimationBrief from './AnimationPageComponents/AnimationBrief'

function AnimationPageSample() {
    return (
        <div>
            <SinglePageNav/>
            <SinglePageBanner/>
            <AnimationBrief/>
            <Footer/>
        </div>
    )
}

export default AnimationPageSample
