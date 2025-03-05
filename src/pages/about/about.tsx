import { motion } from "framer-motion";
import about from '../../assets/about.jpg'

export const About = () => {
    return (
        <div className="min-h-screen h-[1500px]   flex flex-col">
            {/* Top section */}
            <div className="relative w-full h-[300px] mb-5">
                {/* Background Image */}
                <img
                    src={about}
                    alt=""
                    className="w-full h-full object-cover"
                />

                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                    <motion.h1
                        className="text-5xl font-extrabold text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        About Us
                    </motion.h1>
                </div>
            </div>


            {/* Grid Section */}
            <div className=" p-4 grid md:grid-cols-2 gap-4 flex-grow min-h-0">
                <div className="bg-pink-500 flex justify-center items-center min-h-0">
                    {/* Add content here */}
                </div>
                <div className="bg-yellow-500 p-6 flex flex-col justify-center min-h-0">
                    {/* Add content here */}
                </div>
            </div>
            <div className="bg-red-400 w-full h-[300px] mt-5 mb-5"></div>
        </div>
    )
}
