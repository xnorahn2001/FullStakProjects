import React from "react";
import Footer from "./footer";
import Header from "./header";

const layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default layout;