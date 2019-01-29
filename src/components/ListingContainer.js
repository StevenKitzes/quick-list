import React from 'react';
import Item from './Item';

const ListingContainer = ({itemList}) => {
    return(
        <div>
            {
                itemList.map(({data}) => <Item itemData={data} key={data.name} />)
            }
        </div>
    );
};

export default ListingContainer;