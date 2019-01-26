import React from 'react';
import Item from './Item';

const ListingContainer = ({itemList}) => {
    return(
        <div>
            {
                itemList.map(({data}) => <Item itemData={data} />)
            }
        </div>
    );
};

export default ListingContainer;