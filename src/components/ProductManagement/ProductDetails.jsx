import React from 'react';

const ProductDetails = ({ product, index }) => {
    const { name, price, quantity } = product;
    return (
        <div>
                <tr className='flex w-full justify-between px-5 border'>
                    <td className='w-1/5 text-center'>{index + 1}</td>
                    <td className='w-1/5 text-center'>{name}</td>
                    <td className='w-1/5 text-center'>{price}</td>
                    <td className='w-1/5 text-center'>{quantity}</td>
                    <td className='w-1/5 text-center'>{price * quantity}</td>
                </tr>
        </div>
    );
};

export default ProductDetails;