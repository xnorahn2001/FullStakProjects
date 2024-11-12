import React from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import ProductProvider from "./context/ProductContext";
import UserProvider from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <div className="app-container">
          <Routes />
        </div>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
