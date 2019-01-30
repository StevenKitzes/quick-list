import React from 'react';
import Item from './Item';

// Container full of items provided by mapping the children of the Reddit API JSON request
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