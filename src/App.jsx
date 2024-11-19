import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/Home/Home";
import KorzinkaCard from "./korzinka/korzinka";
import {ProductDetails} from "./components/producdDetails/productdDetails"
import { ProductItem } from "./components/productItem/productItem";
import { HomePage } from "./components/HomePage/HomePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="korzinka" element={<KorzinkaCard />} />
          <Route path="detail/:id" element={<ProductDetails />} />
          <Route path="homepage/:id" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
