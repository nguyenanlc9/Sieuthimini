import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">FoodMart</Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
      </nav>
      <CartIcon />
    </header>
  )
}

export default Header
