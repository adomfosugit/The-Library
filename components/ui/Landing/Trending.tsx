import ProductCard from '@/components/Product/Product'
import { fetchProducts } from '@/lib/Api/api'
import { Product } from '@/lib/DummyData'


type Props = {
    Product : Product[]
}


const Trending = async({Product}: Props) => {
  return (
    <div className= ' flex flex-col'>
    <div className='font-bold text-2xl text-white text-center border-b border-2 border-sky-600 py-2 bg-sky-700 '> Recently Added</div>
    <div className='max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  place-items-center mt-2'>
        {Product.map((item) => (
            <ProductCard Product= {item} key={item.id} />
        ))}
    </div>
  </div>
  )
}

export default Trending