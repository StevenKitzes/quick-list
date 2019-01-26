import React from 'react';

const Item = ({title, thumbnail}) => {
    let hasThumb = !(thumbnail === 'self' || thumbnail === 'nsfw');
    return (
        <div className="item">
            <h3 className="item-title">{title}</h3>
            <img className="item-thumbnail" src={hasThumb ? thumbnail: 'placeholder.png'}
                alt={hasThumb ? 'Item thumbail' : 'Placeholder thumbnail'} />
        </div>
    );
};

export default Item;