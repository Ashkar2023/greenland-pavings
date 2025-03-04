import { useParams } from "react-router";


export const ProductDetailPage = () => {
    const { model } = useParams();

    return (
        <div className="h-svh bg-secondary p-4">
            <div className="grid grid-flow-row grid-cols-[1fr_1fr] min-h-full">
                <div className="bg-red-100 h-full w-full"></div>
                <div className="bg-red-300 h-full w-full"></div>
            </div>
        </div>
    )
}
