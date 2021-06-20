import React from 'react'
import "./Product.css"
function Product() {
    return (
        <div className="product">
            <div className='product__info'>
                <p>ZEEL Rainfighter </p>
                <p> Men's Reversible Raincoat </p>
                <p>(Black, X-LARGE, XX-Large)</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>609</strong>
                </p>
                <div className="Product__Rating">
                    <p>⭐</p>
                 
                  
                </div>
            </div>
             <img
             src="https://zeelretail.com/media/catalog/product/cache/36758026be641ee0cf7bc913e552a5be/w/f/wf121eco_blk_1_3_1.jpg"/>
             <button><text>Add to Basket</text></button>
        </div>
    )
}

export default Product
