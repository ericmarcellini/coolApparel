import React from 'react';
<<<<<<< HEAD
import NavBar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import MainView from './components/MainView';
=======
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
>>>>>>> 979d31b5ab7203ebd3ae6ff1987bf720c9696d74

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/*<NavBar /> */}
      {/*<RegisterForm />*/}
      <MainView />
=======
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
>>>>>>> 979d31b5ab7203ebd3ae6ff1987bf720c9696d74
    </div>
  );
}

export default App;
