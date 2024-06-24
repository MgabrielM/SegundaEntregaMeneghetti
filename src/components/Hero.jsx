import React from 'react'
import heroUno from '../../public/images/hero.jpg'
import heroDos from '../../public/images/hero2.jpg'
import heroTres from '../../public/images/hero3.png'

export const Hero = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div class="carousel-item active">
                <img src={heroUno} className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={heroDos} className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={heroTres} className="d-block w-100" alt="..."/>
            </div>
        </div>
    </div>
  )
}