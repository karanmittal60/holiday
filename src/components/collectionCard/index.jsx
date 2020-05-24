import React from 'react';
import './collectionCard.css';
import womenCollection from './../../assets/img/womenCollection.jpg'
import menCollection from './../../assets/img/menCollection.jpg'

const CollectionCard = ({image, title="men Collection", handleCardClick}) => {
    return (
        <div
            className="collection-card"
            style={{background: `url('${image}')`}}
            onClick={handleCardClick}
        >
            <div className="c-card-title">
                <span>{title}</span>
            </div>
        </div>
    );
};

export default CollectionCard;