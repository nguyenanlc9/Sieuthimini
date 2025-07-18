import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import { AppProvider } from './context/AppContext'
import './App.css'

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="app">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  )
}

export default App
