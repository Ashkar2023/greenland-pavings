import { ChevronsRight } from "lucide-react";

interface DriveCardProps {
    productName: string;
    driveLink: string;
}

export default function DriveCard({ productName, driveLink }: DriveCardProps) {
    return (
        <div className="w-full p-6 sm:bg-emerald-50/60 border-0 rounded-xl sm:shadow-lg flex flex-row items-center justify-center md:justify-start gap-4">
            {/* Text Content - hidden before md, button is centered on small screens */}
            <div className="hidden sm:block flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Explore {productName.replaceAll(" ","-")} gallery
                </h3>
                <p className="text-sm text-gray-600">
                    Browse full collection on Google Sites
                </p>
            </div>

            {/* View Gallery Button */}
            <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-1.5 whitespace-nowrap"
            >
                <span>View Gallery</span>
                <ChevronsRight className="w-4 h-4" />
            </a>
        </div>
    );
}
