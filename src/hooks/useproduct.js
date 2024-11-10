import { useContext } from 'react';

import { ProductContext } from '../context/Productcontext';

const useproduct = () => {
  const context = usecontext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return context;
};

export default useproduct;