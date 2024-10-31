import React, { useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
