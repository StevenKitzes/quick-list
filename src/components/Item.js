import React, {Component} from 'react';

class Item extends Component {
    state = {
        id: '',
        toggled: false
    }

    componentWillMount() {
        this.setState({id: this.props.itemData.id});
    }
    
    render() {
        let {thumbnail, title} = this.props.itemData;
        let hasThumb = !(thumbnail === 'self' || thumbnail === 'nsfw');
        return (
            <div className="item" onClick={() => this.toggleComments(this.state.id)}>
                <h3 className="item-title">{title}</h3>
                <img className="item-thumbnail" src={hasThumb ? thumbnail: 'placeholder.png'}
                    alt={hasThumb ? 'Item thumbail' : 'Placeholder thumbnail'} />
            </div>
        );
    };
    
    // On item click, populate and expand comment section
    toggleComments = (id) => {
        alert('item ' + id + ' clicked!');
    }
}

export default Item;