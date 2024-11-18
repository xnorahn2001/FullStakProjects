import React from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import ProductContext from './context/ProductContext';
import UserProvider from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <ProductContext>
        <div className="app-container">
          <Routes />
        </div>
      </ProductContext>
    </UserProvider>
  );
}

export default App;
