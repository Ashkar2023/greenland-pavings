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
        <div className="flex gap-3 py-4 slim-scrollbar mx-auto">
            {
                products.map(product => (
                    <Card
                        className="md:min-w-[270px]"
                        key={product.model}
                        shadow="sm" radius="sm"
                        onPress={() => navigate(`/product/${product.model}`)}
                    >
                        <CardBody className="">
                            <Image
                                alt="Card background"
                                className="rounded-md aspect-square object-cover"
                                src={product.images[0]}
                                width={270}
                            />
                        </CardBody>
                        <CardFooter className="block">
                            <h4 className="font-bold text-large">{product.name}</h4>
                            <p className="text-tiny uppercase font-bold">{product.model}</p>
                            <small className="text-default-500">{product.description}</small>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    )
}
