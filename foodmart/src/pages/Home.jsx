import { useContext, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { AppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'
import sampleData from '../sampleData'

function Home() {
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(AppContext)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const snapshot = await getDocs(collection(db, 'products'))
        const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setProducts(list)
      } catch (err) {
        console.log('Using sample data', err)
        setProducts(sampleData)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="home">
      <div className="products-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default Home
