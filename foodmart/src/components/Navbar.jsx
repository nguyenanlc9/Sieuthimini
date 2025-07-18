import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="text-red-600 font-bold text-xl">FoodMart</Link>
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/">Trang chủ</Link>
          <Link to="#">Danh mục</Link>
          <Link to="#">Đơn hàng</Link>
        </nav>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="border rounded px-2 py-1 text-sm focus:outline-none"
          />
          <Link
            to="/admin"
            className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
          >
            Admin
          </Link>
          <button className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
