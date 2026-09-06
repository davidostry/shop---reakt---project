
import './App.css'
import Layout from './Layout'
import { Route, Routes } from 'react-router'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'

function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<HomePage url="https://fakestoreapi.com/products" />}/>
      <Route path="/favorites" element={<FavoritesPage />}/>
      </Route >
    </Routes>
  )
}

export default App
