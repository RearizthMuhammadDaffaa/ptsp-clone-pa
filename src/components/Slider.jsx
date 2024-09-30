import React from 'react'

const Slider = () => {
  return (
    <div className="carousel w-full h-[200px] rounded">
    <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://ptsp.pa-sumber.go.id/assets/images/featured-banner2-01.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle  btn-outline">❮</a>
      <a href="#slide2" className="btn btn-circle  btn-outline">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://ptsp.pa-sumber.go.id/assets/images/featured-banner-01.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle  btn-outline">❮</a>
      <a href="#slide3" className="btn btn-circle  btn-outline">❯</a>
    </div>
  </div>
    <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://ptsp.pa-sumber.go.id/assets/images/featured-banner2-01.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle  btn-outline">❮</a>
      <a href="#slide2" className="btn btn-circle  btn-outline">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://ptsp.pa-sumber.go.id/assets/images/featured-banner-01.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle  btn-outline">❮</a>
      <a href="#slide3" className="btn btn-circle  btn-outline">❯</a>
    </div>
  </div>
  
</div>
  )
}

export default Slider