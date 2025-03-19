import { Image } from "@heroui/image"
import { ProductCardsSlider } from "../../components/productCardsSlider"
import productData from '../../../_products.json'
export const ProductsListPage = () => {

    return (
        <div className="bg-accent ">
            <div className="w-full h-[700px]  px-4 py-8 flex justify-evenly bg-purple-500">
                <Image
                    alt="Card background"
                    className="rounded-md"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={900}
                />

            </div>
            <div className="bg-blue-400 w-full h-[500px]">
                <section id="products" className="flex flex-col ">
                    <ProductCardsSlider products={productData} />
                </section>
            </div>
            <div className="bg-indigo-400 w-full h-[500px]">

            </div>
            <div className="bg-red-400 w-full h-[500px]">

            </div>
        </div>
    )
}
