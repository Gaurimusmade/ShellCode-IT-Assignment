import React, { useState, useEffect } from 'react';
import Quantity from './quantity';
export default function Item(props) {
    const staticData = {
        key1: `${props.values.name}`,
        key2: `${props.values.color}`,
        key3: `${props.values.price}`,
        key4: `1`,
        key5: `${props.values.img}`
    };

    const handleClick = async () => {
        try {
            const response = await fetch('https://shellcode-it-rh70.onrender.com/api/items', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(staticData),
                console.log(staticData);
            });

        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };
    const handleQuantityUpdate = (newQuantity) => {
        console.log('Quantity updated in MainComponent:', newQuantity);
        staticData.key4 = newQuantity;
    };
    return (
        <div className="item">

            <div className="image">
                <img src={props.values.img} alt="" />
            </div>

            <div className="description">
                <span>{props.values.name} </span>
                <span>{props.values.color}</span>
            </div>
            <div className="total-price">${props.values.price}</div>
            <Quantity onQuantityUpdate={handleQuantityUpdate} ></Quantity>
            <div><button onClick={handleClick}>Add to cart</button></div>
        </div>
    )
}

