import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  )
}

export default App
