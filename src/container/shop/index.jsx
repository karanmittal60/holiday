import React from 'react';
import './shop.css';
import SecondaryHeader from "../../components/secondaryHeader";
import productImage1 from "./../../assets/img/product1.png";

const Shop = () => {

    const productArray = [
        {id: '1', name: 'sample product 1', image: productImage1, price: '200', color: 'Red', size: 'L', qty: 1},
        {id: '2', name: 'sample product 1', image: 'assets/img/product1', price: '200', color: 'Red', size: 'L', qty: 1},
        {id: '3', name: 'sample product 1', image: 'assets/img/product1', price: '200', color: 'Red', size: 'L', qty: 1},
        {id: '4', name: 'sample product 1', image: 'assets/img/product1', price: '200', color: 'Red', size: 'L', qty: 1},
        {id: '5', name: 'sample product 1', image: 'assets/img/product1', price: '200'  , color: 'Red', size: 'L', qty: 1},
    ]
    return (
        <div>
            <SecondaryHeader black={true}/>
            <div className="container mt-5">
                <table className="product-table table table-bordered">
                    <thead>
                    <tr>
                        <th>PRODUCT NAME</th>
                        <th>PRICE</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productArray.map(product => {
                            return (
                                <tr key={product.id} className='product-list-card'>
                                    <td className="product-c">
                                        <div>
                                            <input type="checkbox"/>
                                        </div>
                                        <div>
                                            <img src={productImage1} alt=""/>
                                        </div>
                                        <div className="text-left">
                                            <span> {product.name}</span><br/>
                                            <span> Color: {product.color}</span><br/>
                                            <span> Size: {product.size}</span><br/>
                                        </div>
                                    </td>
                                    <td>${product.price}</td>
                                    <td>
                                        <span><i className="fa fa-plus-circle"></i></span>
                                        <span className="mr-2 ml-2">
                                            {product.qty}
                                        </span>
                                        <span><i className="fa fa-minus-circle"></i></span>
                                    </td>
                                    <td>${product.price * product.qty}</td>
                                    <td>
                                        <i className="fa fa-trash"></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>


            <div className="text-right">
                <button className="buy-now">BUY NOW</button>
            </div>
        </div>
    );
};

export default Shop;