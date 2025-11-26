import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/Api/api';
import ProductActions from '@/components/ProductActions';


type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  console.log(product)

  if (!product) {
    notFound();
  }
  

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {product.image.length > 0 ? (
                <>
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                    //@ts-ignore
                      src={`${product.image[0].url}`}
                      alt={ product.name}
                      fill
                      className="object-fit"
                      priority
                    />
                  </div>
                  {product.image.length > 1 && (
                    <div className="grid grid-cols-4 gap-4">
                      {product.image.slice(1, 5).map((img, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square rounded-lg overflow-hidden bg-gray-100"
                        >
                          <Image
                            //@ts-ignore
                            src={`${img.url}`}
                            alt={ `${product.name} ${idx + 2}`}
                            fill
                            className="object-fit"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-square rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-6">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-green-400 bg-green-50 rounded-full mb-4">
                  {product.categories}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-3xl font-semibold text-gray-900">
                  GHS {product.price.toFixed(2)}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>

              <div className="flex gap-4 pt-6">
              
              <ProductActions product={product} />
                
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}