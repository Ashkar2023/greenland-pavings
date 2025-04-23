import projects from "../../_ourprojects.json";

export default function ProjectCardsSlider() {
    const duplicatedProjects = [...projects, ...projects];

    return (
        <section className="pb-16 overflow-hidden">
            <div className="my-4 flex justify-center">
                <h2 className="text-4xl font-semibold border-b border-app-primary pb-1 px-4">Our Projects</h2>
            </div>
            <div className="w-full overflow-hidden">
                <div className="flex w-max projects-animate gap-3">
                    {duplicatedProjects.map((proj, index) => (
                        <img key={index} src={proj} alt="" className="h-44 md:h-72 object-cover aspect-square rounded-xl" />
                    ))}
                </div>
            </div>
        </section>
    );
}
