import { Card, CardBody } from "@heroui/card";
import { ChevronsRight } from "lucide-react";

interface DriveCardProps {
    productName: string;
    driveLink: string;
}

export default function DriveCard({ productName, driveLink }: DriveCardProps) {
    return (
        <Card className="bg-emerald-50/60 border-0 shadow-lg rounded-xl overflow-hidden">
            <CardBody className="p-6 flex flex-row items-center gap-4 flex-wrap md:flex-nowrap">
                {/* Google Drive Icon Section */}
                

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Explore {productName} Varieties
                    </h3>
                    <p className="text-sm text-gray-600">
                        Browse full collection on Google Drive
                    </p>
                </div>

                {/* Green Gradient Button */}
                <a
                    href={driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-1.5 whitespace-nowrap"
                >
                    <span>View Gallery</span>
                    <span className="text-xs leading-none">™</span>
                    <ChevronsRight className="w-4 h-4" />
                </a>
            </CardBody>
        </Card>
    );
}
