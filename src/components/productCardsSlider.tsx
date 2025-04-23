import { Card, CardBody, CardFooter } from "@heroui/card"
import { Image } from "@heroui/image"
import { LucideArrowUpRight } from "lucide-react"
import { FC } from "react"
import { useNavigate } from "react-router"

type Props = {
    products: {
        name: string,
        model: string,
        description: string,
        images: string[]
    }[],
    categoryName: string
}

export const ProductCardsSlider: FC<Props> = ({ products, categoryName }) => {
    const navigate = useNavigate();

    return (
        <div className="ml-3 md:ml-10 my-5">
            <div className="mb-2" id="category-header">
                <h2 className="border-b inline text-4xl">{categoryName}</h2>
            </div>
            <div className="slim-scrollbar pb-3 pt-1 px-1 gap-3 flex flex-row overflow-x-scroll">
                {
                    products.map(product => (
                        <Card
                            className="cursor-pointer min-w-[180px] md:min-w-[250px] relative group bg-white"
                            key={product.model}
                            shadow="sm" radius="sm"
                        >
                            <CardBody className="max-w-fit"
                                onClick={() => navigate(`/product/${product.model.toLowerCase()}`)}
                            >
                                <Image
                                    alt="Card background"
                                    className="rounded-md aspect-square object-cover"
                                    src={product.images[0]}
                                    width={270}
                                />

                            </CardBody>
                            <CardFooter className="block max-w-[300px] leading-none bg-inherit z-20">
                                <h4 className="font-bold text-large text-app-accent">{product.name}</h4>
                                <p className="text-tiny uppercase font-bold">{product.model}</p>
                                <small className="text-default-500">{product.description}</small>
                            </CardFooter>

                            <button
                                className="click-view-btn absolute w-1/3 p-1 items-center justify-center hidden gap-2 bg-gray-100 z-10 shadow-lg rounded-xl group-hover:flex"
                                onClick={() => navigate(`/product/${product.model.toLowerCase()}`)}
                            >
                                view
                                <LucideArrowUpRight size={15}/>
                            </button>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
