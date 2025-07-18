import { useState, useEffect } from 'react'
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

function AdminDashboard() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    getDocs(collection(db, 'products')).then(snapshot => {
      setProducts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    })
  }, [])

  const addProduct = async () => {
    await addDoc(collection(db, 'products'), { name, price: Number(price) })
    setName(''); setPrice('')
  }

  const remove = async id => {
    await deleteDoc(doc(db, 'products', id))
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="space-y-2 mb-4">
        <input className="border p-1" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-1" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <button onClick={addProduct} className="bg-green-600 text-white py-1 px-2 rounded">Add</button>
      </div>
      <ul>
        {products.map(p => (
          <li key={p.id} className="flex justify-between border-b py-1">
            <span>{p.name} - {p.price}đ</span>
            <button onClick={() => remove(p.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminDashboard
