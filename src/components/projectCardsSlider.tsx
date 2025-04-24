import { useEffect, useRef, useState } from "react";
import projects from "../../_ourprojects.json";
import mediumZoom, { Zoom, ZoomOpenOptions } from "medium-zoom";
interface Props {
    dir: "left" | "right"
}

export default function ProjectCardsSlider({ dir }: Props) {
    const duplicatedProjects = [...projects, ...projects];
    const zoomRef = useRef<null | Zoom>(null);
    const zoomImage = useRef<null | HTMLElement>(null);

    useEffect(() => {
        zoomRef.current = mediumZoom("[data-image-zoomable]", {
            background: "#d1fae5",
        })

        const projectsContainer = document.getElementsByClassName("projects-animate");


        zoomRef.current.on("open", (event) => {
            console.log(event);
            projectsContainer.item(0)?.classList.add("paused")
        })
        
        zoomRef.current.on("closed", (event) => {
            console.log(event);
            projectsContainer.item(0)?.classList.remove("paused")
        })

        return () => {
            zoomRef.current?.detach();
        }
    }, [])

    const handleImageZoom = (index: number) => {
        const image = document.querySelector(`[data-image="P${index}"]`)
        zoomImage.current = image as HTMLElement;
        zoomRef.current?.open({ target: zoomImage.current })
    }

    return (
        <section className="mb-2 overflow-hidden">

            <div className="w-full overflow-hidden">
                <div className="flex w-max projects-animate gap-3" data-dir={dir}>
                    {duplicatedProjects.map((imageSrc, index) => (
                        <div
                            className="project-card h-44 md:h-72 aspect-square rounded-xl overflow-hidden"
                            onClick={() => handleImageZoom(index)}
                        >
                            <img
                                key={index} src={imageSrc} alt="" className="w-full h-full object-cover" data-image={`P${index}`} data-image-zoomable
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
