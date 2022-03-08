import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './EmblaCarousel.css'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const bangkok = require('../assets/bangkok.jpg');
  const blackcomb = require('../assets/blackcomb.jpeg');
  const chesterman = require('../assets/chesterman.jpg');
  const rainbow = require('../assets/cotopaxi_rainbow.jpg');
  const cotopaxi = require('../assets/cotopaxi.jpg');
  const erawan = require('../assets/erawan_falls.jpg');

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <img width="25%" className="embla__slide" src={ bangkok }/>
        <img width="25%" className="embla__slide" src={ blackcomb }/>
        <img width="25%" className="embla__slide" src={ chesterman }/>
        <img width="25%" className="embla__slide" src={ rainbow }/>
        <img width="25%" className="embla__slide" src={ cotopaxi }/>
        <img width="25%" className="embla__slide" src={ erawan }/>
      </div>
    </div>
  )
}