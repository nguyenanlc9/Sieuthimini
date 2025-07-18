import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function CartIcon() {
  const { cart } = useContext(AppContext)
  const total = cart.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <Link to="/cart" className="relative">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="7" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </svg>
      {total > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
          {total}
        </span>
      )}
    </Link>
  )
}

export default CartIcon
