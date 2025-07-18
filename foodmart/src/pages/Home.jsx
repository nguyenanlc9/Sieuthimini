import { useContext, useState } from 'react'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import productsData from '../data/sampleProducts'

const filters = ['Tất cả', 'Rau củ', 'Thịt cá', 'Sữa & trứng', 'Đồ khô']
const sorts = ['Mới nhất', 'Giá tăng', 'Giá giảm']

function Home() {
  const { addToCart } = useContext(AppContext)
  const [activeFilter, setActiveFilter] = useState('Tất cả')
  const [sort, setSort] = useState('Mới nhất')

  const products = [...productsData]
  if (sort === 'Giá tăng') products.sort((a, b) => a.price - b.price)
  if (sort === 'Giá giảm') products.sort((a, b) => b.price - a.price)

  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded px-3 py-1 text-sm ${activeFilter === f ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="w-40 rounded border px-2 py-1 text-sm"
          >
            {sorts.map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(p => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
