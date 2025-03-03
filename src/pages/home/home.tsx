import { ProductCardsSlider } from "../../components/productCardsSlider"

const fakeProducts = [
    {
        name: "Product 1",
        model: "Model A",
        description: "Description for product 1"
    },
    {
        name: "Product 2",
        model: "Model B",
        description: "Description for product 2"
    },
    {
        name: "Product 3",
        model: "Model C",
        description: "Description for product 3"
    },
    {
        name: "Product 4",
        model: "Model D",
        description: "Description for product 4"
    },
    {
        name: "Product 4",
        model: "Model D",
        description: "Description for product 4"
    },
    {
        name: "Product 4",
        model: "Model D",
        description: "Description for product 4"
    },
]
const fakeCateggories = ["category 1", "category 2", "category 3"];

export const HomePage = () => {
    return (
        <div className="bg-green-300">
            {/* hero section */}
            <div className="lg:h-[550px] bg-yellow-50" id="hero">

            </div>

            <div className="my-4 flex justify-center">
                <h2 className="text-4xl font-semibold border-b border-primary pb-1 px-4">Products</h2>
            </div>


            {/* products section */}
            <section id="products" className="flex flex-col">
                {
                    fakeCateggories.map(category => (
                        <div key={category} className="px-6 py-4 w-2/3 mx-auto ">
                            <h1 className="text-4xl font-medium">
                                {category}
                            </h1>
                            <ProductCardsSlider products={fakeProducts} />
                        </div>
                    ))
                }
            </section>

        </div>
    )
}
