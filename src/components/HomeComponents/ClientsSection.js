import React from 'react'
import { Link } from 'react-router-dom'
import './ClientSection.css'

function ClientsSection() {
    return (
        <div className='clentbody'>
            <div className="clientcontainer">
                <div className="clientcontent">
                    <div className="clientbody">
    
				<div className="grid1">
				<Link to = '/about'>
				<figure className="effect-bubba">
					<figcaption>
							<h2>About <span>Us.</span></h2>
							<p>More About Us</p>
							
						</figcaption>			
					</figure>
				</Link>
			<Link to = '/services/all'>
			<figure className="effect-bubba1">
						
						<figcaption>
							<h2>Our <span>Services.</span></h2>
							<p>Our Area of Experties</p>
							
						</figcaption>			
					</figure>
			</Link>
				</div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClientsSection
