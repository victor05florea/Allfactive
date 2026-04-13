//toate Route-urile adunate
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { CartPage } from "../pages/CartPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/cartPage" element={<CartPage />} />
    </Routes>
  );
};
