import { BentoGrid } from "../../components/bentoGrid";
import { ProductCardsSlider } from "../../components/productCardsSlider";
import productsJson from "../../../_products.json";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@heroui/button";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-app-light">
            {/* hero section  lg:rounded-[0%_0%_20%_0%_/_0%_0%_30%_0%] md:rounded-[0%_0%_20%_0%/0%_0%_14%_0%] rounded-[0px_0%_30%_0px/0px_0%_10%_0px] sm:rounded-[0px_0%_30%_0px/0px_0%_30%_0px]*/}
            <div className="lg:h-[600px] sm:px-4 sm:py-8 flex justify-evenly bg-app-accent sm:flex-row flex-col" id="hero">
                <BentoGrid />
                <img src="https://parsonsrocks.com/wp-content/uploads/2020/10/shutterstock_1329188213.jpg" alt="" className="h-[50vh] sm:w-1/2 md:hidden object-cover"/>

                <div className="sm:w-1/3 p-8 sm:p-0 flex flex-col justify-center">
                    <h2 className="text-xl text-white  lg:text-3xl font-semibold">
                        Elevate Your Outdoors with Timeless Paving & Kerbs
                    </h2>
                    <p className="text-gray-700 lg:text-lg mt-4">
                        Enhance your spaces with premium <span className="font-medium">tiles, paving, and kerbs</span> designed for durability and style. Whether for driveways, patios, or walkways, our expert-crafted solutions bring elegance and strength to every project. <br /><br /> <span className="font-medium">Quality that lasts, beauty that stands out.</span>
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
                <h2 className="text-4xl font-semibold border-b border-app-primary pb-1 px-4">Products</h2>
            </div>


            {/* products section */}
            <section id="products" className="w-full">
                <ProductCardsSlider products={productsJson}  categoryName="Stones"/>
            </section>
            <section id="products" className="w-full">
                <ProductCardsSlider products={productsJson} categoryName="Pavers"/>
            </section>
            <section id="products" className="w-full">
                <ProductCardsSlider products={productsJson} categoryName="Interlocks"/>
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
