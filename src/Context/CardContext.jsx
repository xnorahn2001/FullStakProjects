// import React, { createContext, useState, useContext } from 'react';
// const CardContext = createContext();
// export const CardProvider = ({ children }) => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Cool T-Shirt',
//       description: 'A very cool T-shirt for coding ninjas!',
//       price: 29.99,
//       image: 'path-to-your-image.jpg'
//     },
//     {
//       id: 2,
//       name: 'Stylish Mug',
//       description: 'Perfect mug for coffee lovers!',
//       price: 14.99,
//       image: 'path-to-your-image2.jpg'
//     }
    
//   ]);

//   return (
//     <CardContext.Provider value={{ products, setProducts }}>
//       {children}
//     </CardContext.Provider>
//   );
// };


// export const useCardContext = () => {
//   return useContext(CardContext);
// };
