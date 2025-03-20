import { motion } from "framer-motion";
import projectsData from '../../../_ourprojects.json'

interface Project {
  image_filenames: string[];
  product_name: string;
  project_description: string;
}

export const OurProjects = () => {
  return (
    <div className="bg-app-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-6 text-2xl font-semibold text-app-accent">
            Our Projects
          </div>
          <p className="text-lg text-gray-700 text-center">
            Explore our latest innovative projects that bring technology and convenience to everyday life.
          </p>
        </motion.div>

        {/* Projects Section */}
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 gap-12">
            {projectsData.map((project: Project, index: number) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="w-full md:w-1/2"
                >
                  {/* Grid Image Layout */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {project.image_filenames.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={project.product_name}
                        className="rounded-lg shadow-md object-cover w-full h-40"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="space-y-4 text-center md:text-left w-full md:w-1/2"
                >
                  <h1 className="text-xl font-bold text-app-accent">{project.product_name}</h1>
                  <p className="text-gray-600">{project.project_description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No projects available.</p>
        )}
      </div>
    </div>
  );
};
