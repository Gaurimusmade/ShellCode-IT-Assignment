import React from 'react'
import { useNavigate } from "react-router-dom";
import Item from './item';
function product() {
    const navigate = useNavigate();

    return (

        <div className="shopping-cart">

            <div className="title">
                Shopping Bag
                <button onClick={() => navigate('/cart')} className='cart'>GO TO CART</button>

            </div>

            <Item values={{
                img: "https://m.media-amazon.com/images/I/6175SlKKECL._SX679_.jpg",
                name: "OnePlus Nord",
                color: "Aqua Surge",
                price: 549
            }}></Item>

            <Item values={{
                img: "https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg",
                name: "OnePlus",
                color: "Galactic Silver",
                price: 870
            }}></Item>

            <Item values={{
                img: "https://m.media-amazon.com/images/I/91xdNu6S9DL._SX679_.jpg",
                name: "realme narzo ",
                color: "Mars Orange",
                price: 349
            }}></Item>
        </div>
    )
}

export default product