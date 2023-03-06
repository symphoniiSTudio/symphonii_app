import React from 'react'
import {Carousel} from 'react-bootstrap'
import './HomeSlider.css'

function HomeSlider() {
    return (
      <>
        <div  className='mediahight'>
            <Carousel fade>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 "
      src="/img/Illustration16.jpg"
      alt="Symphonii illustration"
      height='550'
    />
     {/* <Carousel.Caption>
      <h3>YOUR LOGO DESIGN AND WEBSITE THAT PEOPLE RECOGNIZE</h3>
      <p>We design websites and visuals that not only exemplify your brand’s identity but also make sure to win you the game.</p>
    <div className="cotadvaa">
      <button>Order Now</button>
     
    </div>
    </Carousel.Caption> */}

  </Carousel.Item>
 <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="/img/brand.jpg"
      alt="Symphonii Cartoon"
      height='550'
    />
  {/* <Carousel.Caption>
      <h3>YOUR LOGO DESIGN AND WEBSITE THAT PEOPLE RECOGNIZE</h3>
      <p>We design websites and visuals that not only exemplify your brand’s identity but also make sure to win you the game.</p>
    <div className="cotadvaa">
      <button>Order Now</button>
     
    </div>
    </Carousel.Caption> */}
  </Carousel.Item> 

<Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="/img/slider2.jpg"
      alt="Symphonii Brand Design"
      height='550'
    />
  {/* <Carousel.Caption>
      <h3>YOUR LOGO DESIGN AND WEBSITE THAT PEOPLE RECOGNIZE</h3>
      <p>We design websites and visuals that not only exemplify your brand’s identity but also make sure to win you the game.</p>
    <div className="cotadvaa">
      <button>Order Now</button>
     
    </div>
    </Carousel.Caption> */}
  </Carousel.Item> 
</Carousel >
        </div>

        <div  className='mediahight1'>
            <Carousel fade>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 "
      src="/img/brandm1.jpg"
      alt="Symphonii Animation"
      height='400'
    />
  {/* <Carousel.Caption>
      <h3>YOUR LOGO DESIGN AND WEBSITE THAT PEOPLE RECOGNIZE</h3>
      <p>We design websites and visuals that not only exemplify your brand’s identity but also make sure to win you the game.</p>
    <div className="cotadvaa">
      <button>Order Now</button>
     
    </div>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="/img/Illustration16.jpg"
      alt="Symphonii Cartoon"
      height='400'
    />
  {/* <Carousel.Caption>
      <h3>YOUR LOGO DESIGN AND WEBSITE THAT PEOPLE RECOGNIZE</h3>
      <p>We design websites and visuals that not only exemplify your brand’s identity but also make sure to win you the game.</p>
    <div className="cotadvaa">
      <button>Order Now</button>
     
    </div>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="/img/slider2.jpg"
      alt="Symphonii Brand Design"
      height='400'
    />
      {/* <Carousel.Caption>
      <h3>YOUR LOGO DESIGN AND WEBSITE THAT PEOPLE RECOGNIZE</h3>
      <p>We design websites and visuals that not only exemplify your brand’s identity but also make sure to win you the game.</p>
    <div className="cotadvaa">
      <button>Order Now</button>
     
    </div>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
        </div>

        </>
    )
}

export default HomeSlider
