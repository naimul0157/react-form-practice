import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [productDetail, setProductDetail] = useState([]);
    const handleAddProduct  = newproduct =>{
        const newproducts = [...productDetail, newproduct];
        setProductDetail(newproducts)
    }
    // console.log(productDetail);
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable productDetail={productDetail}></ProductTable>
        </div>
    );
};

export default ProductManagement;