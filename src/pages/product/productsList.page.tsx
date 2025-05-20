import { Image } from "@heroui/image";
import productData from "../../../_products.json";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { useNavigate } from "react-router";

export const ProductsListPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-emerald-100 w-full">
            {/* Product Grid */}
            <div className="bg-accent w-full py-6 px-2 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
                {productData.slice(0, 4).map(product => (
                    <Card
                        className="md:min-w-[270px] pb-4 flex flex-col h-[450px] transition-all duration-300 border border-transparent hover:border-black hover:shadow-lg cursor-pointer"
                        key={product.model}
                        shadow="sm"
                        radius="sm"
                    >
                        <CardBody className="p-0 h-[350px] relative overflow-hidden" 
                        onClick={() => navigate(`/product/${product.model.toLowerCase()}`)}
                        >
                            <Image
                                alt="Card background"
                                className="rounded-md w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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

            {/* More Products Grid */}
            <div className="bg-accent w-full py-6 px-2 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
                {productData.slice(4).map(product => (
                    <Card
                        className="md:min-w-[270px] pb-4 flex flex-col h-[450px] transition-all duration-300 border border-transparent hover:border-black hover:shadow-lg cursor-pointer"
                        key={product.model}
                        shadow="sm"
                        radius="sm"
                        >
                        <CardBody className="p-0 h-[350px] relative overflow-hidden" 
                        onClick={() => navigate(`/product/${product.model.toLowerCase()}`)}
                        >
                            <Image
                                alt="Card background"
                                className="rounded-md w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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
