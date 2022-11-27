import React from 'react';
import useProducts from '../../CustomHooks/UseProducts';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const[products]= useProducts()
    return (
        <div className='Inventory'>
        {products.map(product=><Product product={product}/>)}
        </div>
    );
};

export default Inventory;