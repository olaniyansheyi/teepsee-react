import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "@/AppLayout";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Category from "@/pages/categories/Category";
import SearchResult from "@/pages/search-result/[query]";
import SingleProduct from "@/pages/products/[id]";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route element={<AppLayout />}>
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/search-result/:query" element={<SearchResult />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
