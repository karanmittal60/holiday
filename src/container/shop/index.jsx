import React, {useState} from 'react';
import './shop.css';
import SecondaryHeader from "../../components/secondaryHeader";
import productImage1 from "./../../assets/img/product1.png";
import usePikachu from "../../hooks/usePikachu";
import PaymentSuccess from "../../components/paymentSuccess";

const Shop = () => {
    const {cart, removeFromCart, onChangeProductQty} = usePikachu();

    const deleteProductFromCart = (prod) => {
        removeFromCart(prod)
    }

    const onChangeQty = (product, type) => {
        if (product.qty <= 1 && type === 'd'){
            removeFromCart(product)
        } else {
            onChangeProductQty(product, type)
        }
    }

    const totalAmount = () => {
        let total = 0;

        for (let prod of cart){
            const amt = prod.qty * prod.cost;
            total = total + amt;
        }

        return total;
    }

    const [success, setSuccess] = useState(false);

    const buyNow = () => {
        setSuccess(true)
    }

    if (success){
        return (
            <div>
                <SecondaryHeader black={true}/>
                <PaymentSuccess/>
            </div>
        )
    }
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
                        cart &&
                        cart.length> 0 ?
                            cart.map(product => {
                                return (
                                    <tr key={product.id} className='product-list-card'>
                                        <td className="product-c">
                                            <div>
                                                <input type="checkbox"/>
                                            </div>
                                            <div>
                                                <img className="p-image" src={product.image} alt=""/>
                                            </div>
                                            <div className="text-left">
                                                <span> {product.title}</span><br/>
                                                <span> Color: {product.color}</span><br/>
                                                <span> Size: {product.size}</span><br/>
                                            </div>
                                        </td>
                                        <td>${product.cost}</td>
                                        <td>
                                            <span onClick={() => onChangeQty(product,'i')}><i className="fa fa-plus-circle"/></span>
                                            <span className="mr-2 ml-2">
                                            {product.qty}
                                        </span>
                                            <span onClick={() => onChangeQty(product, 'd')}><i className="fa fa-minus-circle"/></span>
                                        </td>
                                        <td>${product.cost * product.qty}</td>
                                        <td>
                                        <span>
                                            <i className="fa fa-trash" onClick={() => deleteProductFromCart(product)}/>
                                        </span>
                                        </td>
                                    </tr>
                                )
                            }): <tr className="text-center">
                                <td colSpan={5}>
                                    Your cart is empty
                                </td>
                            </tr>
                    }
                    <tr className="total-row">
                        <td colSpan="3" className="text-right">
                            Total
                        </td>
                        <td colSpan={2}>
                            {totalAmount()}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            {
                cart && cart.length > 0 ? (
                        <div className="text-right">
                            <button className="buy-now" onClick={buyNow} >BUY NOW</button>
                        </div>
                    )
                    : <></>
            }
        </div>
    );
};

export default Shop;