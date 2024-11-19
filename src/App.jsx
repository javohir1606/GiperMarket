import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/main-layout";
import KorzinkaCard from "./korzinka/korzinka";
import {ProductDetails} from "./components/producdDetails/productdDetails"
import { HomePage } from "./components/HomePage/HomePage";
import { Home } from "./pages/Home/home";


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
