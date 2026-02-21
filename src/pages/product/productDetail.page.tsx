import { useParams } from "react-router";
import productsData from '../../../_products.json'
import DriveCard from '../../components/drive-card';

interface Product {
    name: string;
    model: string;
    description: string;
    images: string[];
    driveLink?: string;
}

export const ProductDetailPage = () => {
    const { model } = useParams<{ model: string }>();
    const products: Product[] = productsData;
    const product = products.find((p) => p.model.toLowerCase() === model);

    if (!product) {
        return <div className="text-center text-red-500">Product not found</div>;
    }

    return (
        <div className="bg-gradient-to-b md:bg-gradient-to-r from-white to-app-light p-4 md:min-h-screen h-fit">
            <div className="grid grid-flow-row md:grid-cols-[1fr_1fr] gap-4 mb-6">
                {/* Left Side: Embla Carousel */}
                <div className="h-[500px] md:h-[600px]  flex justify-center items-center">
                    {/* <div className="w-full h-full"> */}
                        <img
                            src={product.images[0]}
                            alt={product.model}
                            className="w-full h-full object-contain scale-[85%] drop-shadow-[15px_25px_25px_rgb(0,0,0,.6)]"
                        />
                    {/* </div> */}
                </div>

                {/* Right Side: Product Details */}
                <div className=" h-full w-full p-6 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg">{product.description}</p>
                </div>
            </div>
            
            {/* Drive Card Section */}
            {product.driveLink && (
                <div className="max-w-xl mx-auto mt-8">
                    <DriveCard 
                        productName={product.name} 
                        driveLink={product.driveLink}
                    />
                </div>
            )}
        </div>
    ); 
  
  
};
