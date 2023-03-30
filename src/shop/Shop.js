import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import './Shop.css';



const shop = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products,setproducts]= useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cart,setCart] =useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{

fetch('products.json')
.then(res=>res.json())
.then(data=>setproducts(data))
    },[]);

const handleAddToCart = () =>{
console.log(products);

const newCart =[...cart,products];
setCart(newCart);

}

    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                
                ></Product>)
            }

            </div>
            <div className="cart-container">

               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default shop;