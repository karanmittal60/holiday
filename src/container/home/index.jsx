import React, { useState} from 'react';
import './home.css';
import {products} from './productData.js'
import SecondaryHeader from "../../components/secondaryHeader";
import CollectionCard from "../../components/collectionCard";
import womenCollection from './../../assets/img/womenCollection.jpg'
import menCollection from './../../assets/img/menCollection.jpg'
import ProductCard from "../../components/productCard";
import productImage1 from "./../../assets/img/productImage1.png";
import menProduct1 from "./../../assets/img/menProduct1.jpeg";
import usePikachu from "../../hooks/usePikachu";

const Home = () => {

    const {cart, addToCart} = usePikachu();
    const [collectionType, setCollectionType] = useState("");

    const handleCardClick = (type) => {
        setCollectionType(type)
    }

    const addProductToCart = (product) => {
        addToCart(product)
    }

    return (
        <div>
            <SecondaryHeader black={false}/>
            {/*
            <PaymentSuccess/>
            */}
            {
                collectionType === "" ?
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-sm-12">
                            <div className="float-right">
                                <CollectionCard
                                    title="Men Collection"
                                    image={menCollection}
                                    handleCardClick={() => handleCardClick('men')}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-sm-12">
                            <CollectionCard
                                title="women Collection"
                                image={womenCollection}
                                handleCardClick={() => handleCardClick('women')}
                            />
                        </div>
                    </div>
                    : <>
                        <div className="container mt-4">
                            <div className="prod-heading">
                                <span>
                                    products
                                </span>
                            </div>
                            <div className="row">
                                {
                                    products.map(prod => {
                                        if (prod.type == collectionType){
                                            return (
                                                <ProductCard
                                                    id={prod.id}
                                                    image={prod.image}
                                                    star={prod.star}
                                                    title={prod.title}
                                                    description={prod.description}
                                                    cost={prod.cost}
                                                    addToCart={() => addProductToCart(prod)}
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </>
            }

        </div>
    );
};

export default Home;