import React from 'react';

const ProductDetails = ({ product }) => {
    const { name, price, quantity } = product;
    return (
        <div>
                <tr className='flex w-full justify-between px-5 border'>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                </tr>
        </div>
    );
};

export default ProductDetails;