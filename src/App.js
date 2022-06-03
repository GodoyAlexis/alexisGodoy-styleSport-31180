// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import ProductCategory from "./pages/ProductCategory";

// or less ideally

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detail />}/>
          <Route path="/products/:category" element={<ProductCategory />}/>
          <Route path="*" element={<NotFound />}/>
          

        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
