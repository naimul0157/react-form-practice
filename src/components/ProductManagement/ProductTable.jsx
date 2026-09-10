import React from 'react';
import ProductDetails from './ProductDetails';

const ProductTable = ({productDetail}) => {
    
    return (
        <div className='w-4/5 mx-auto border-2'>
          <table className='w-full'>
                <tr className='flex w-full justify-between px-5'>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </table>
            {
                productDetail.map(product => <ProductDetails product={product}></ProductDetails>)
            }
        </div>
    );
};

export default ProductTable;