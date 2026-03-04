import projects from "../../_ourprojects.json";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Props {
  dir: "left" | "right";
}

export default function ProjectCardsSlider({ dir }: Props) {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="mb-2">
      <div className="w-full overflow-hidden">
        <div
          className="flex w-max projects-animate gap-3"
          data-dir={dir}
        >
          {duplicatedProjects.map((imageSrc, index) => (
            <div
              key={index}
              className="project-card relative h-44 md:h-72 w-44 md:w-72 rounded-xl overflow-hidden flex-shrink-0"
            >
              <Zoom>
                <img
                  src={imageSrc}
                  alt={`Project ${index}`}
                  className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                />
              </Zoom>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}