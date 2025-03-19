import { BentoGrid } from "../../components/bentoGrid";
import { ProductCardsSlider } from "../../components/productCardsSlider";
import productsDetails from "../../../products.json";

// const fakeProducts = [
//     {
//         name: "Product 1",
//         model: "Model A",
//         description: "Description for product 1"
//     },
//     {
//         name: "Product 2",
//         model: "Model B",
//         description: "Description for product 2"
//     },
//     {
//         name: "Product 3",
//         model: "Model C",
//         description: "Description for product 3"
//     },
//     {
//         name: "Product 4",
//         model: "Model D",
//         description: "Description for product 4"
//     },
//     {
//         name: "Product 4",
//         model: "Model D",
//         description: "Description for product 4"
//     },
//     {
//         name: "Product 4",
//         model: "Model D",
//         description: "Description for product 4"
//     },
// ]
// const fakeCateggories = ["category 1", "category 2", "category 3"];

export const HomePage = () => {
    return (
        <div className="bg-app-light">
            {/* hero section */}
            <div className="lg:h-[600px] px-4 py-8 flex justify-evenly bg-app-primary rounded-[0px_0%_30%_0px_/_0px_0%_30%_0px]" id="hero">
                <BentoGrid />

                <div className="w-1/3 text-textSecondary flex flex-col justify-center">
                    <h2 className="text-white text-3xl font-semibold">
                        Elevate Your Outdoors with Timeless Paving & Kerbs
                    </h2>
                    <p className="text-white text-lg mt-4">
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
            <section id="products" className="">
                {
                    // productsDetails.map(product => (
                    //     <div key={product.model} className="px-6 py-4 w-2/3 mx-auto ">
                    //         <h1 className="text-4xl font-medium">
                    //             {category}
                    //         </h1>
                    //         <ProductCardsSlider products={productsDetails} />
                    //     </div>
                    // ))
                }
                <ProductCardsSlider products={productsDetails} />
            </section>

        </div>
    )
}
