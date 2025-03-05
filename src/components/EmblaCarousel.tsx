import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Pause, Play, ChevronRight, ChevronLeft } from 'lucide-react'

interface EmblaCarouselProps {
    images: string[];
    pauseVisible?: boolean;
    scrollHandlesVisible?: boolean;
    delay?: number
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images, pauseVisible = true, scrollHandlesVisible = false, delay = 4000 }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const autoplay = Autoplay({ stopOnInteraction: false, delay });
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [emblaApi, images]);

    const toggleAutoplay = () => {
        if (!emblaApi) return;
        if (isPlaying) {
            emblaApi.plugins()?.autoplay?.stop();
        } else {
            emblaApi.plugins()?.autoplay?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="embla w-full h-full relative">
            <div className="embla__viewport w-full h-full overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex w-full h-full">
                    {images.map((img, index) => (
                        <div className="embla__slide flex-shrink-0 w-full h-full" key={index}>
                            <img
                                src={img}
                                alt={`Product Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            {
                scrollHandlesVisible && (
                    <>
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
                    </>
                )
            }

            {/* Autoplay Toggle */}
            {
                pauseVisible && (
                    <button
                        className="absolute mobile:bottom-14 sm:bottom-14 md:bottom-28 lg:bottom-28 left-1/2 transform -translate-x-1/2 text-gray-300 px-3 py-1 rounded"
                        onClick={toggleAutoplay}
                    >
                        {isPlaying ? <Pause size={40} /> : <Play size={40} />}
                    </button>
                )
            }
        </div>
    );
};

