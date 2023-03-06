import React from 'react'
import SinglePageBanner from '../BranddesignPages/BrandDesign'
import SinglePageNav from '../../SinglePageNav'
import Footer from '../../../Footer'
import BrandDesign1 from './BrandDesignComponent/BrandDesign1'
// import AnimatBrief from './AnimationPageComponents/AnimationBrief'

function BrandDesign() {
    return (
        <div>
            <SinglePageNav/>
            <SinglePageBanner/>
            <BrandDesign1/>
            <Footer/>
        </div>
    )
}

export default BrandDesign