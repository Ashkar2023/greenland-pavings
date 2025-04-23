import { EmblaCarousel } from "./EmblaCarousel"
import gridImages from "../../gridImages.json"
import { FC, HTMLProps } from "react"

// const MAX_DELAY = 4500;
// const MIN_DELAY = 2500;

// const getRandomDelay = () => Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY);

export const BentoGrid : FC<HTMLProps<HTMLDivElement>> = () => {


    return (
        <div className="mx-7 mt-5 sm:mx-0 sm:mt-0 sm:w-1/2 lg:h-full md:h-[60vh] h-[50vh] md:block">
            <div className="size-full grid *:rounded *:overflow-hidden *:shadow-sm *:shadow-white grid-cols-5 grid-rows-3 gap-1" id="grid-container">

                <div className="col-span-3 bg-slate-500">
                    <EmblaCarousel images={gridImages[0]} pauseVisible={false} scrollHandlesVisible={false} delay={5100} />
                </div>
                <div className="col-span-2 bg-blue-500">
                    <EmblaCarousel images={gridImages[1]} pauseVisible={false} scrollHandlesVisible={false} delay={4200} />
                </div>
                <div className="col-span-2 row-span-2 bg-green-500">
                    <EmblaCarousel images={gridImages[2]} pauseVisible={false} scrollHandlesVisible={false} delay={6100} />
                </div>
                <div className="col-span-3 bg-yellow-800">
                    <EmblaCarousel images={gridImages[3]} pauseVisible={false} scrollHandlesVisible={false} delay={2800} />
                </div>
                <div className="col-span-2 bg-lime-300">
                    <EmblaCarousel images={gridImages[4]} pauseVisible={false} scrollHandlesVisible={false} delay={3900} />
                </div>
                <div className="col-span-1 bg-lime-300">
                    <EmblaCarousel images={gridImages[5]} pauseVisible={false} scrollHandlesVisible={false} delay={4300} />
                </div>

            </div>
        </div >
    )
}