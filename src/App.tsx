import { Route, Routes } from "react-router";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<HomePage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />
      </Route>
    </Routes>
  );
}