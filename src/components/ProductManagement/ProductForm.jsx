import React from 'react';

const ProductForm = ({handleAddProduct}) => {

    const handleSubmit = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.Quantity.value;

        const productDetail = {
            name,
            price,
            quantity
        }
        handleAddProduct(productDetail);
    }
    return (
        <div className='text-center py-5'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Product Name' name='name' className='border px-4 mb-2' /><br />
                <input type="text" placeholder='Product Price' name='price' className='border px-4 mb-2' /><br />
                <input type="text" placeholder='Product quantity' name='Quantity' className='border px-4 mb-2' /><br />
                <input type="submit" value="Submit" className='btn'/>
                
            </form>
        </div>
    );
};

export default ProductForm;