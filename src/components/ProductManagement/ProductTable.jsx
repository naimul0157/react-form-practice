import React from 'react';
import ProductDetails from './ProductDetails';

const ProductTable = ({ productDetail }) => {

    return (
        <div>
            <h1 className='text-center font-extrabold text-2xl mb-5'>
                Total Added Products: {productDetail.length}
            </h1>
            <table className='w-4/5 mx-auto border-2'>
                <thead>
                    <tr className='flex w-full justify-between px-5'>
                        <th className='w-1/5'>No.</th>
                        <th className='w-1/5'>Product Name</th>
                        <th className='w-1/5'>Price</th>
                        <th className='w-1/5'>Quantity</th>
                        <th className='w-1/5'>Total</th>
                    </tr>
                </thead>
                {
                    productDetail.map((product, index) => <ProductDetails key={index} index={index} product={product}></ProductDetails>)
                }
            </table>

        </div>

    );
};

export default ProductTable;