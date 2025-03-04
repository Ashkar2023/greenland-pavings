import { useParams } from "react-router";
import { EmblaCarousel } from "../../components/EmblaCarousel";
import productsData from '../../../products.json'

interface Product {
  name: string;
  model: string;
  description: string;
  images: string[];
}

export const ProductDetailPage = () => {
  const { model } = useParams<{ model: string }>();
  const products: Product[] = productsData;
  const product = products.find((p) => p.model === model);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="h-screen bg-secondary p-4">
      <div className="grid grid-flow-row grid-cols-[1fr_1fr] min-h-full gap-4">
        {/* Left Side: Embla Carousel */}
        <div className="bg-red-100 h-full w-full p-4 flex justify-center items-center">
          <EmblaCarousel images={product.images} />
        </div>

        {/* Right Side: Product Details */}
        <div className="bg-red-300 h-full w-full p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
