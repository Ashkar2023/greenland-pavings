import { InstagramIcon } from "../assets/instagram-icon";
import { FbIcon } from "../assets/fb-icon";
import AppLogo from '../assets/logo.jpg'
import { motion } from "framer-motion";
import { YoutubeIcon } from "../assets/youtube-icon";
import { Link } from "react-router";

export const Footer: React.FC = () => {
    return (
        <div className="bg-emerald-50 border-t">
            <footer className="py-12 px-4  bg-white">
                <div className="max-w-full mx-auto">
                    <div className="md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-textPrimary">Quick Links</h3>
                            <ul className="space-y-2">
                                {[
                                    { label: "Home", path: "/" },
                                    { label: "Products", path: "/products" },
                                    { label: "About us", path: "/about" }
                                ].map((item) => (
                                    <li key={item.path}>
                                        <Link 
                                            to={item.path} 
                                            className="hover:text-gray-900 transition duration-300" 
                                            aria-label={`Navigate to ${item.label}`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-textPrimary">Connect With Us</h3>
                            <div className="flex space-x-4 mb-6">
                                <motion.a
                                    href="https://www.instagram.com/greenlandpaving?igsh=NzB3YngxcXQ2bm9t&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <InstagramIcon />
                                </motion.a>

                                <motion.a
                                    href="https://www.facebook.com/share/17ysJBvayt/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <FbIcon />
                                </motion.a>

                                <motion.a
                                    href="https://youtube.com/@greenlandpaving?si=dCge3-bHB9sfTO3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <YoutubeIcon />
                                </motion.a>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-textPrimary">Contact Us</h3>
                            <div className="space-y-2">
                                <div className="flex flex-col">
                                    <span className="font-medium">Greenland Pavings</span>
                                    <span>Seraphin Building, Ponneth Temple Road</span>
                                    <span>West End, Kadavanthra, Kochi.</span>
                                    <span>Kerala - 682 020</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <span className="font-medium">Call:</span>
                                    <span>+91 7012889427</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <span className="font-medium">Email:</span>
                                    <a href="mailto:sales@pgpavers.com" className="text-blue-500 hover:underline">
                                        greenlandpaving@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Logo Positioned at the Right */}
                        <div className="flex md:justify-end items-start">
                            <img src={AppLogo} alt="Nike Logo" className="max-w-44 md:max-w-full object-contain" />
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
                        <p>© 2025 Greenland Pavings. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>

    );
};
