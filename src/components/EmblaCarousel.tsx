import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {Pause, Play, ChevronRight, ChevronLeft } from 'lucide-react'

interface EmblaCarouselProps {
  images: string[];
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplay = Autoplay({ stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, images]);

  // Toggle autoplay function
  const toggleAutoplay = () => {
    if (!emblaApi) return;
    if (isPlaying) {
      emblaApi.plugins()?.autoplay?.stop(); // Stop autoplay
    } else {
      emblaApi.plugins()?.autoplay?.play(); // Start autoplay
    }
    setIsPlaying(!isPlaying);
  };

  

  return (
    <div className="embla w-full max-w-lg relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((img, index) => (
            <div className="embla__slide flex-shrink-0 w-full relative" key={index}>
              <img src={img} alt={`Product Image ${index + 1}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons Inside Image */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight size={24} />
      </button>

      {/* Autoplay Toggle Button */}
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/60 text-red-300 px-3 py-1 rounded"
        onClick={toggleAutoplay}
      >
        {isPlaying ? <Pause size={20}/> : <Play size={20}/>}
      </button>
    </div>
  );
};
