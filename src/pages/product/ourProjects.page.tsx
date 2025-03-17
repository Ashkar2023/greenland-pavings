import { motion } from "framer-motion";
import projectsData from "../../../ourprojects.json";

interface Project {
  image_filename: string;
  product_name: string;
  project_description: string;
}

console.log("projectData", projectsData);

export const OurProjects = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-6 text-2xl font-semibold text-blue-700">
            Our Projects
          </div>
          <p className="text-lg text-gray-700 font-serif text-center">
            Explore our latest innovative projects that bring technology and convenience to everyday life.
          </p>
        </motion.div>

        {/* Projects Section (Alternating Layout) */}
        {projectsData && projectsData.length > 0 ? (
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
                >
                  <img
                    src={project.image_filename}
                    alt={project.product_name}
                    className="rounded-lg shadow-md w-80 h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="space-y-4 text-center md:text-left"
                >
                  <h1 className="text-xl font-bold text-blue-600">{project.product_name}</h1>
                  <p className="text-gray-600 font-serif">{project.project_description}</p>
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
