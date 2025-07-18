import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

function Header() {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">FoodMart</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>
      <CartIcon />
    </header>
  )
}

export default Header
