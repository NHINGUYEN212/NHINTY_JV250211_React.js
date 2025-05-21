import React from 'react'
import LandingPage from './components/LandingPage'
import ShoppingCart from './components/ShoppingCart'
import StudentManager from './components/StudentManager'

export default function App() {
  return (
    <div>
      <StudentManager />
      <ShoppingCart />
      <LandingPage />
    </div>
  )
}
