import { Card, CardBody, CardFooter } from "@heroui/card"
import { Image } from "@heroui/image"
import { FC } from "react"
import { useNavigate } from "react-router"

type Props = {
    products: {
        name: string,
        model: string,
        description: string,
        images: string[]
    }[]
}

export const ProductCardsSlider: FC<Props> = ({ products }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="slim-scrollbar gap-3 py-4 lg:mx-56 md:mx-24 grid md:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)]">
                {
                    products.slice(0, 6).map(product => (
                        <Card
                            className="cursor-pointer"
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
                            <CardFooter className="block max-w-[300px] leading-none">
                                <h4 className="font-bold text-large text-app-accent">{product.name}</h4>
                                <p className="text-tiny uppercase font-bold">{product.model}</p>
                                <small className="text-default-500">{product.description}</small>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}
