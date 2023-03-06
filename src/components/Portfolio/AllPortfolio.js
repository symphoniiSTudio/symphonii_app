import React from 'react'
import Allportfolio from './PortfolioComponents/Allportfolio'
import PortFolioBanner from './PortfolioComponents/PortFolioBanner'
import  PortfolioNavbar from './PortfolioComponents/PortfolioNavbar'


function AllPortfolio() {
    return (
        <div>
            <PortfolioNavbar/>
            <PortFolioBanner/>
            <Allportfolio/>

        </div>
    )
}

export default AllPortfolio
