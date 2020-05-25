import React from 'react';
import './productCard.css';
import productImage1 from './../../assets/img/productImage1.png';

const ProductCard = ({ id, image=productImage1, star=3, title="", description="", cost=0, addToCart }) => {

    const renderStar = () => {
        let stars = []
        for(let i = 0; i < 5; i++) {
            if (i < star) {
                stars.push(<i className="fa fa-star"></i>)
            }else {
                stars.push(<i className="far fa-star"></i>)
            }
        }

        return stars;
    }
    return (
        <div className="col-4" key={id}>
            <div className="product-card">
                <div>
                    <img
                        src={image}
                        alt="product image"
                        className="product-image"
                    />
                </div>
                <div className="bottom-wrapper">
                    <div className="star">
                        {renderStar()}
                    </div>
                    <div className="p-c-title">
                        <span>{title}</span>
                    </div>
                    <div className="p-c-description">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="p-c-cost">
                        <span className="cost">${cost}</span>
                        <button className="btn" onClick={() => addToCart(id)}>
                            <i className="fa fa-shopping-cart" />
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;