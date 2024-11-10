import { useContext } from 'react';

import { CartContext } from '../context/cartcontext';

const usecart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return context;
};

export default usecart;