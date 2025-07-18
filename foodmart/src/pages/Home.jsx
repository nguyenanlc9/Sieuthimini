import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import products from '../data/sampleProducts'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  const { addToCart } = useContext(AppContext)

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <div className="p-4">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default Home
