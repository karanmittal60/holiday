import React from "react";
import {AppContext} from "../context/AppContext";

const usePikachu = () => {

    const [state, setState] = React.useContext(AppContext);

    function addToCart(product) {
        setState(prevState => {
            return {
                ...prevState,
                cart: [...prevState.cart, product]
            }
        })
    }

    function removeFromCart(product) {
        setState(prevState => {
            return {
                ...prevState,
                cart: prevState.cart.filter(prod => prod.id !== product.id)
            }
        })
    }

    function onEditCart(product) {
        setState(prevState => {
            return {
                ...prevState,
                cart: [...prevState.cart.filter(prod => prod.id !== product.id), product]
            }
        })
    }

    function onChangeProductQty(product, type) {
        let cloneCart = state.cart;

        let prodIndex = cloneCart.findIndex(prod => prod.id === product.id);

        if (type === 'd'){
            cloneCart[prodIndex].qty--
        } else {
            cloneCart[prodIndex].qty++
        }
        setState(prevState => {
            return {
                ...prevState,
                cart: cloneCart
            }
        })
    }

    return {
        cart: state.cart,

        addToCart,

        removeFromCart,

        onEditCart,

        onChangeProductQty
    }
};

export default usePikachu;