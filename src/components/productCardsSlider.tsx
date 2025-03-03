import { Card, CardBody, CardFooter } from "@heroui/card"
import { Image } from "@heroui/image"
import { FC } from "react"

type Props = {
    products: {
        name: string,
        model: string,
        description: string
    }[]
}

export const ProductCardsSlider: FC<Props> = ({ products }) => {
    return (
        <div className="flex gap-3 py-4 overflow-x-scroll slim-scrollbar">
            {
                products.map(product => (
                    <Card className="md:min-w-[270px]" key={product.model} shadow="sm" radius="sm">
                        <CardBody className="">
                            <Image
                                alt="Card background"
                                className="rounded-md"
                                src="https://heroui.com/images/hero-card-complete.jpeg"
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
