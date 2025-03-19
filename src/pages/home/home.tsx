import { BentoGrid } from "../../components/bentoGrid";
import { ProductCardsSlider } from "../../components/productCardsSlider";
import productsDetails from "../../../products.json";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@heroui/button";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-app-light">
            {/* hero section */}
            <div className="lg:h-[600px] px-4 py-8 flex justify-evenly bg-app-primary rounded-[0px_0%_20%_0px_/_0px_0%_30%_0px]" id="hero">
                <BentoGrid />

                <div className="w-1/3 text-white flex flex-col justify-center">
                    <h2 className="text-textPrimary text-3xl font-semibold">
                        Elevate Your Outdoors with Timeless Paving & Kerbs
                    </h2>
                    <p className="text-textPrimary text-lg mt-4">
                        Enhance your spaces with premium <span className="font-medium">tiles, paving, and kerbs</span> designed for durability and style. Whether for driveways, patios, or walkways, our expert-crafted solutions bring elegance and strength to every project. <span className="font-medium">Quality that lasts, beauty that stands out.</span>
                    </p>

                    {/* <Button
                        startContent={<Search strokeWidth={"1px"}/>}
                        radius="sm"
                        className="mt-8 font-medium"
                        >
                        Browse products
                    </Button> */}
                </div>
            </div>

            <div className="my-4 flex justify-center">
                <h2 className="text-4xl font-semibold border-b border-primary pb-1 px-4">Products</h2>
            </div>


            {/* products section */}
            <section id="products" className="w-full flex justify-center">
                <ProductCardsSlider products={productsDetails} />
            </section>


            <div className="flex">
                <div className="w-full flex justify-center ">
                    <Button
                        className="mt-2 px-24 bg-white mb-8"
                        onPress={() => navigate(`/products`)}
                    >
                        <h1 className="">View more</h1>
                        <ChevronsRight className="group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>
            </div>



        </div>
    )
}
