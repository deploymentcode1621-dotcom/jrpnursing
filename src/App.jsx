import React from 'react'
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </HashRouter>
  )
}