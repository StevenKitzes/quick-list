import React from 'react';

const expand = (itemId) => {
    alert('item ' + itemId + ' clicked!');
}

const Item = ({itemData: {id, title, thumbnail}}) => {
    let hasThumb = !(thumbnail === 'self' || thumbnail === 'nsfw');
    return (
        <div className="item" onClick={() => expand(id)}>
            <h3 className="item-title">{title}</h3>
            <img className="item-thumbnail" src={hasThumb ? thumbnail: 'placeholder.png'}
                alt={hasThumb ? 'Item thumbail' : 'Placeholder thumbnail'} />
        </div>
    );
};

export default Item;