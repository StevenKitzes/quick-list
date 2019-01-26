import React from 'react';
import Item from './Item';

const ListingContainer = ({itemList}) => {
    return(
        <div>
            {
                itemList.map(({title, thumbnail}) => <Item title={title} thumbnail={thumbnail} />)
            }
        </div>
    );
};

export default ListingContainer;