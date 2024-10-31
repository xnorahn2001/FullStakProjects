import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <img src={product.ImageUrl} alt="Product"/>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetail;
