import { useParams } from "react-router";


export const ProductDetailPage = () => {
<<<<<<< HEAD
  return (
    <h1>product details page</h1>
  );
};
=======
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
>>>>>>> c5a7dc30d487b572d8da4e356719825b6083d070
