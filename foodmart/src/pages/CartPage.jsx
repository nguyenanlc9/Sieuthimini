import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart } = useContext(AppContext)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
          <div>
            <p className="font-semibold">{item.name}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={e => updateQty(item.id, Number(e.target.value))}
              className="border p-1 w-16"
            />
          </div>
          <div>
            <p>{item.price * item.quantity}đ</p>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Remove</button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="mt-4">
          <p className="font-bold">Total: {total}đ</p>
          <button onClick={clearCart} className="mt-2 bg-green-600 text-white py-1 px-4 rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default CartPage
