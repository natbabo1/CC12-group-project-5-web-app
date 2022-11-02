import { useNavigate } from "react-router-dom";
import { toBaht } from "../../utils/numberFormat";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div
      className="w-48 bg-vivid-orange/30 hover:bg-vivid-orange/20 p-4 rounded-3xl cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      <div className="relative w-full pt-[100%] overflow-hidden">
        <img
          className="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-auto max-h-full max-w-full rounded-lg"
          src={product.image}
          alt="category"
        />
      </div>
      <div className="flex flex-col items-center mt-4 grow justify-between">
        <div className="max-w-full break-words">
          <div className="text-xl text-center max-w-full">
            {product.productName}
          </div>
          <div className="text-vivid-orange text-base text-center mt-1 h-16 whitespace-pre-wrap">
            {product.Category.categoryName}
          </div>
        </div>
        <div className="text-xl font-semibold">{toBaht(product.unitPrice)}</div>
      </div>
    </div>
  );
}

export default ProductCard;
