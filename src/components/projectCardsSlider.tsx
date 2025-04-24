import projects from "../../_ourprojects.json";

interface Props {
    dir: "left" | "right"
}

export default function ProjectCardsSlider({ dir }: Props) {
    const duplicatedProjects = [...projects, ...projects];

    return (
        <section className="mb-2 overflow-hidden">
            
            <div className="w-full overflow-hidden">
                <div className="flex w-max projects-animate gap-3" data-dir={dir}>
                    {duplicatedProjects.map((proj, index) => (
                        <div className="project-card h-44 md:h-72 aspect-square rounded-xl overflow-hidden">
                            <img key={index} src={proj} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
