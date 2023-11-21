import React, { useState, useEffect } from 'react';
import './App.css'
import { useNavigate } from "react-router-dom";
function Cart() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => { 
        fetch('http://localhost:5001/api/items')
            .then(response => response.json())
            .then(data => { 
                setItems(data)
                console.log(data.rows)
            });
    }, []);

    const handleDelete = (ID) => {
        fetch(`http://localhost:5001/api/items/${ID}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                setItems(prevItems => prevItems.filter(item => item.ID !== ID));
            })
            .catch(error => console.error('Error deleting item:', error));
        window.location.reload(false);
    };

    const Deleteall = () => {
        fetch(`http://localhost:5001/api/items`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                setItems([]);
            })
            .catch(error => console.error('Error deleting item:', error));
        window.location.reload(false);
    };
    return (
 
        <div className="shopping-cart">
         <button onClick={() => Deleteall()} className='deleteallbtn'>CLEAR CART</button>
            {items.map(item => (

                <div className="item" key={item.ID}>

                    <div className="image">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="description" >
                        <span> {item.Name}</span>

                        <span> {item.Color}</span>
                    </div>
                    <div className="total-price">${item.Price}</div>
                    <div>
                        <p>Quantity  : {item.Quantity}</p>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(item.ID)}>Remove</button>
                    </div>
                </div>


            ))}



        </div>


    )
}

export default Cart