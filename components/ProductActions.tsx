'use client';

import { Product } from '@/lib/DummyData';
import { useCartStore } from '@/public/Context/StateContext';


type Props = {
  product: Product;
};

export default function ProductActions( {product} : Props) {
  const addToCart = useCartStore((s) => s.onAdd);
  const qty = useCartStore((s) => s.qty);
  const incQty = useCartStore((s) => s.incQty);
  const decQty = useCartStore((s) => s.decQty);

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={decQty}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-2 font-medium border-x border-gray-300">
            {qty}
          </span>
          <button
            onClick={incQty}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        className="w-full bg-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
        onClick={() => addToCart(product, qty)}
      >
        Add to Cart
      </button>
    </div>
  );
}