import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Inventory = () => {
    const [products] = useProducts();
    const [cart] = useCart(products)
    return (
        <div>
            <h3>{products.length}</h3>
            <h3>{cart.length}</h3>
            <h3>this is inventory </h3>
        </div>
    );
};

export default Inventory;