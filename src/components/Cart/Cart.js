import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>order summmary</h4>
                <p>Selected Items:{cart.length}</p>
        </div>
    );
};

export default Cart;