import { Image } from "@heroui/image";
import productData from "../../../_products.json";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { useNavigate } from "react-router";

export const ProductsListPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-accent w-full">
        {/* Banner Section */}
        <div className="w-screen bg-black h-[300px] sm:h-[400px] lg:h-[400px] mt-4 bg-accent overflow-hidden flex">
            <Image
                alt="Banner background"
                className="w-full h-full object-cover"
                src="https://heroui.com/images/hero-card-complete.jpeg"
            />
        </div>
    

    

            {/* Product Grid */}
            <div className="bg-accent w-full py-6 px-2 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
                {productData.slice(0, 4).map(product => (
                    <Card
                        className="md:min-w-[270px] flex flex-col h-[450px] transition-all duration-300 border border-transparent hover:border-app-accent hover:shadow-lg cursor-pointer"
                        key={product.model}
                        shadow="sm"
                        radius="sm"
                    >
                        <CardBody className="p-0 h-[350px] relative overflow-hidden" 
                        onClick={() => navigate(`/product/${product.model.toLowerCase()}`)}
                        >
                            <Image
                                alt="Card background"
                                className="rounded-md w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                src={product.images[0]}
                                height={300}
                                width={400}
                            />
                        </CardBody>
                        <CardFooter className="text-center h-[100px] flex flex-col justify-center">
                            <h4 className="font-bold text-large">{product.name}</h4>
                            <p className="text-tiny uppercase font-bold">{product.model}</p>
                            <small className="text-default-500">{product.description}</small>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Second Banner Section */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[400px] mt-4 flex justify-center items-center bg-accent overflow-hidden">
                <Image
                    alt="Card background"
                    className="w-full h-full object-cover"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                />
            </div>

            {/* More Products Grid */}
            <div className="bg-accent w-full py-6 px-2 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
                {productData.slice(4).map(product => (
                    <Card
                        className="md:min-w-[270px] flex flex-col h-[450px] transition-all duration-300 border border-transparent hover:border-app-accent hover:shadow-lg cursor-pointer"
                        key={product.model}
                        shadow="sm"
                        radius="sm"
                        >
                        <CardBody className="p-0 h-[350px] relative overflow-hidden" 
                        onClick={() => navigate(`/product/${product.model.toLowerCase()}`)}
                        >
                            <Image
                                alt="Card background"
                                className="rounded-md w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                src={product.images[0]}
                                height={300}
                                width={400}
                            />
                        </CardBody>
                        <CardFooter className="text-center h-[100px] flex flex-col justify-center">
                            <h4 className="font-bold text-large">{product.name}</h4>
                            <p className="text-tiny uppercase font-bold">{product.model}</p>
                            <small className="text-default-500">{product.description}</small>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};
