import { motion } from "framer-motion";
import about from '../../assets/about.jpg';

export const About = () => {
    return (
        <div className="min-h-screen bg-app-light flex flex-col">
            {/* Top section */}
            <div className="relative w-full h-[300px] mb-5">
                {/* Background Image */}
                <img
                    src={about}
                    alt="About Us"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
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
            <motion.div
                className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Left Section - Text Content */}
                <motion.div
                    className=" p-6 flex flex-col items-start min-h-0 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <h1 className=" text-textPrimary text-center text-2xl font-bold w-full">
                        OUR STORY
                    </h1>
                    <p className="text-textPrimary mt-4 leading-relaxed">
                        At Greenland, we take pride in transforming outdoor spaces with expert paving and landscaping solutions. With years of experience, our team delivers high-quality craftsmanship, innovative designs, and durable materials to enhance your property.
                    </p>
                    <p className="text-textPrimary mt-4 leading-relaxed">
                        Whether it’s a driveway, patio, or landscape overhaul, we work closely with clients to bring their vision to life. Our commitment to excellence, attention to detail, and customer satisfaction set us apart.
                    </p>
                    <p className="text-textPrimary mt-4 leading-relaxed">
                        From residential gardens to commercial spaces, we provide customized solutions that suit your style, needs, and budget. Trust Greenland to create stunning outdoor spaces that stand the test of time.
                    </p>
                </motion.div>

                {/* Right Section - Image Content */}
                <motion.div
                    className=" p-6 flex justify-center items-center rounded-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="relative w-full md:w-[500px] h-[300px] md:h-[400px]">
                        <img
                            src={about}
                            alt="Our Work"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                            <motion.h1
                                className="text-4xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                Our Work
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
                className="p-4  grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.div
                    className="  p-6 flex flex-col  min-h-0 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >

                <h1 className=" text-textPrimary px-10 text-left text-2xl font-bold w-full">
                    Why Choose Us?
                </h1>
                <p className="text-textPrimary px-10 text-left mt-8 leading-relaxed">
                    ✅ Experienced & Skilled Team
                </p>
                <p className="text-textPrimary px-10 text-left mt-4 leading-relaxed">
                    ✅ High-Quality Materials & Workmanship
                </p>
                <p className="text-textPrimary px-10 text-left mt-4 leading-relaxed">
                    ✅ Personalized Designs & Solutions
                </p>
                <p className="text-textPrimary px-10 text-left mt-4 leading-relaxed">
                    ✅ Reliable & Timely Project Completion
                </p>
                <p className="text-textPrimary px-10 text-left mt-8 leading-relaxed">
                Let’s build something beautiful together! Contact us today for a free consultation.
                </p>
                </motion.div>


            </motion.div>
        </div>
    );
}
