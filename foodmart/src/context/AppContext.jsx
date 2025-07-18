/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useReducer } from 'react'

export const AppContext = createContext()

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(item => item.id === action.product.id)
      if (existing) {
        existing.quantity += 1
        return { ...state, cart: [...state.cart] }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.product, quantity: 1 }],
      }
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(i => i.id !== action.id) }
    case 'UPDATE_QTY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.id ? { ...item, quantity: action.qty } : item
        ),
      }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  const addToCart = product => dispatch({ type: 'ADD_TO_CART', product })
  const removeFromCart = id => dispatch({ type: 'REMOVE_FROM_CART', id })
  const updateQty = (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <AppContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </AppContext.Provider>
  )
}
