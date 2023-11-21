import React, { useState } from 'react';

const QuantityInput = ({ quantity, onQuantityChange }) => {
    return (
        <input
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(e.target.value)}
            min="1"
        />
    );
};

const Quantity = ({ onQuantityUpdate }) => {
    const [product, setProduct] = useState({
        quantity: 1,
    });

    const handleQuantityChange = (newQuantity) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            quantity: parseInt(newQuantity, 10),
        }));
        onQuantityUpdate(parseInt(newQuantity, 10));
    };

    return (
        <div className='quantity'>
            <label>Quantity: </label>
            <QuantityInput
                quantity={product.quantity}
                onQuantityChange={handleQuantityChange}
            />
        </div>
    );
};

export default Quantity;